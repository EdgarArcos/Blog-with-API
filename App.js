let body = document.querySelector('#main-body');
const posts = fetch('http://localhost:3000/posts');
const users = fetch('http://localhost:3000/users');
const comments = fetch('http://localhost:3000/comments');


// fetch('http://localhost:3000/posts')
//     .then(res => res.json())
//     .then(json => {
//         console.log(json)
//         json.map(data => {    
//             body.append(createHTML(data));
//         })
//     })

let loadMore1 = document.querySelector("#loadMore")
let indexChange = 0
let numShowPosts = 4
let object = 0

Promise.all([posts, users, comments]).then(values => {
    return Promise.all(values.map(data => data.json()));
}).then(([posts, users, comments]) => {
    let z = 0;
    let j = 0;
    for (let i = 0; i < posts.length; i++) {
        const {id, title, body : postBody} = posts[i];
        const {email : userMail, username : userUsername} = users[z];
        const {name : commentName, body : commentBody, email : commentMail} = comments[j];
        body.append(createHTML(title, postBody,id, userMail, userUsername, commentName, commentBody, commentMail));
        z = z + 1;
        j = j + 1;        
    }});
    
    
// });



function createHTML (title, postBody,id, userMail, userUsername, commentName, commentBody, commentMail) {
function numLoad() {
fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(json => {
        console.log(json);
        for (index = indexChange; index < numShowPosts; index++) {
            console.log(index);
            body.append(createHTML(json[index]));    
        }
    })
}
    loadMore1.addEventListener("click" ,load)
function load() {
indexChange = indexChange+4
numShowPosts = numShowPosts+4
console.log(numShowPosts);
numLoad()
}
window.onload = numLoad;
function createHTML ({title,body,}) {
    let main = document.createElement('div');
    main.innerHTML = `
    <div class="container" >
        <div class="row bg-white mt-5 ">
            <div class="col-12">
                <p>${title}</p> 
                <p>${userUsername}</p> 
                <p>${userMail}</p>
                <p>${postBody}</p>
                <h5>Usuario</h5>
                <h6 class="text-muted">Correo</h6>
                <p>${title}</p>
                <p>${body}</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button type="button" class="btn btn-Warning" data-bs-toggle="modal" data-bs-target="#modal-${id}">Show Post</button>
                </div>
                <div class="border-bottom d-md-flex justify-content-md-end">
                <button type="button" class="buttomEdit btn btn-outline-primary btn-sm me-md-2" data-bs-toggle="modal" data-bs-target="#ventanaModalEdit" >Edit</button>
                <button type="button" class="buttomRemove btn btn-outline-danger btn-sm me-md-2">Remove</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" tabindex="-1" id="modal-${id}" role="dialog" aria-labelledby="tituloVentana" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
            <h5 id="tituloVentana" class="modal-title">${title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <p>${postBody}</p>
            </div>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Comentarios
            </button>
            </p>
            <div class="collapse" id="collapseExample">
            <div class="card card-body">
            ${commentBody}
            </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
        </div>
    </div>
    <div class="modal fade" tabindex="-1" id="ventanaModalEdit" role="dialog" aria-labelledby="tituloVentana" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
            <h5 id="tituloVentana" class="modal-title">Editor</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <p>Noticia</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save changes</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
        </div>
    </div>'
    `;
    return main;
}}