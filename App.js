let loadMore1 = document.querySelector("#loadMore")
let indexChange = 0
let numShowPosts = 4
let object = 0
let body = document.querySelector('#main-body');
let posts= []
let users= []
let comments= []
const postsFetch = fetch('http://localhost:3000/posts');
const usersFetch = fetch('http://localhost:3000/users');
const commentsFetch = fetch('http://localhost:3000/comments');
let buttonID = document.querySelector('#main-body');
buttonID.addEventListener('click', deleteFuncion);
const deletePost = {
    method: 'DELETE'};
const updatePost = {
    method: 'POST'};
let url = 'http://localhost:3000/posts/';

async function fetcData() {
    const fetchData= await Promise.all([postsFetch, usersFetch, commentsFetch]).then(values => {
            return Promise.all(values.map(data => data.json()));
        });
        posts= fetchData[0]
        users= fetchData[1]
        comments= fetchData[2]
        numLoad(indexChange,numShowPosts);
}

function numLoad(indexChange,numShowPosts) {
    let z = 0;
    let j = 0;
    for (let i = indexChange; i < numShowPosts; i++) {
        const {id, title, body : postBody} = posts[i];
        const {email : userMail, username : userUsername} = users[z];
        const {name : commentName, body : commentBody, email : commentMail} = comments[j];
        body.append(createHTML(title, postBody,id, userMail, userUsername, commentName, commentBody, commentMail));
        z = z + 1;
        j = j + 1;        
    }
}

window.onload = fetcData();
loadMore1.addEventListener("click" ,load) 
function load() {
        indexChange = indexChange+4
        numShowPosts = numShowPosts+4
}    

function deleteFuncion (e) {
    if (!e) {e=window.event}
    e.preventDefault();
    let edit = "edit"
    let save = "save"
    let idcontainer = e.target["id"]
    if (idcontainer != edit) {
        let urlid = url+idcontainer
        fetch(urlid,deletePost)
        .then(function() {
        }).catch(error => console.log(error));
    }
    if (idcontainer === save) {
        console.log("hola");
    }
};
function editPost() {
console.log(valor);
}

function createHTML (title, postBody,id, userMail, userUsername, commentName, commentBody, commentMail) {
    let main = document.createElement('div');
    main.innerHTML = `
    <div class="container" class='buttonContainer'>
        <div class="row bg-white mt-5">
            <div class="col-12">
                <p>${title}</p> 
                <p>${postBody}</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button type="button" class="btn btn-Warning" data-bs-toggle="modal" data-bs-target="#modal-${id}">Show Post</button>
                </div>
                <div class="border-bottom d-md-flex justify-content-md-end">
                <button type="button" class="buttomEdit btn-primary" id="edit" btn btn-outline-primary btn-sm me-md-2" data-bs-toggle="modal" data-bs-target="#ventanaModalEdit" >Edit</button>
                <button type="button" id="${id}" class="buttomRemove btn btn-outline-danger btn-sm me-md-2">Remove</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" tabindex="-1" id="modal-${id}" role="dialog" aria-labelledby="tituloVentana" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title">${title}</h5>
            <p>${userUsername}</p>
            <p>${userMail}</p>
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
            <p>${commentName}</p>
            <p>${commentMail}</p>
            <p>${commentBody}</p>
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
            <h5 class="modal-title">Editor</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <h4>Tittle</h4>
            <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
            <h4>Content</h4>
            <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="modal-footer">
                <button type="button" id="save" class="btn btn-primary">Save changes</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
        </div>
    </div>`;
    return main;
}