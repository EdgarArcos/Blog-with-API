

let body = document.querySelector('#main-body');
let loadMore1 = document.querySelector("#loadMore")
let indexChange = 0
let numShowPosts = 4
let object = 0

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
    main.innerHTML = `<div class="container" >
        <div class="row bg-white mt-5 ">
            <div class="col-12">
                <h5>Usuario</h5>
                <h6 class="text-muted">Correo</h6>
                <p>${title}</p>
                <p>${body}</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button type="button" class="btn btn-Warning" data-bs-toggle="modal" data-bs-target="#ventanaModalPost">Show Post</button>
                </div>
                <div class="border-bottom d-md-flex justify-content-md-end">
                <button type="button" class="buttomEdit btn btn-outline-primary btn-sm me-md-2" data-bs-toggle="modal" data-bs-target="#ventanaModalEdit" >Edit</button>
                <button type="button" class="buttomRemove btn btn-outline-danger btn-sm me-md-2">Remove</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" tabindex="-1" id="ventanaModalPost" role="dialog" aria-labelledby="tituloVentana" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
            <h5 id="tituloVentana" class="modal-title">${title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <p>${body}</p>
            </div>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Comentarios
            </button>
            </p>
            <div class="collapse" id="collapseExample">
            <div class="card card-body">
                Esto son los comentarios
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
    </div>
    `;
    return main;
}















// // fetch("http://localhost:3000/posts").then(response => response.json()).then(data => {
// //     post = data[2]
// //     post = post.body
// //     console.log(post)
// // })




// // fetch("http://localhost:3000/posts", {
// //     method: 'GET',
    
// // }).then(response => response.json()).then(data => {
// //     postTitle1 = document.querySelector('#title1');
// //     postBody1 = document.querySelector("#body1");
// //     title = data.title;
// //     body = data.body;
// //     title1.innerText = title;
// //     postBody1.innerText = body;
// // })



    
//     fetch("http://localhost:3000/users/2").then(response => response.json()).then(data => {
//     username = data.username;
//     email = data.email;
//     elementUsername= document.createElement('li');
//     elementEmail = document.createElement('li');
//     elementUsername.innerText = `Username: ${username}`;
//     elementEmail.innerText = `Title: ${email}`;
//     fetch("http://localhost:3000/comments").then(response => response.json()).then(data => {
//     author1 = data[200].email;
//     comment1 = data[200].body;
//     elementAuthor1= document.createElement('li');
//     elementComment1 = document.createElement('li');
//     elementAuthor1.innerText = `Author: ${author1}`;
//     elementComment1.innerText = `Comment: ${comment1}`;
//     ul.appendChild(elementUsername);
//     ul.appendChild(elementEmail);
//     ul.appendChild(elementTitle);
//     ul.appendChild(elementBody);
//     ul.appendChild(elementAuthor1);
//     ul.appendChild(elementComment1);
// })    
// })











