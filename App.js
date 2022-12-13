




// fetch("http://localhost:3000/posts").then(response => response.json()).then(data => {
//     post = data[2]
//     post = post.body
//     console.log(post)
// })


fetch("http://localhost:3000/posts/3", {
    method: 'GET',
    
}).then(response => response.json()).then(data => {
    elementBody = document.createElement('li');
    elementTitle = document.createElement('li');
    ul = document.querySelector('#unordered');
    title = data.title;
    body = data.body;
    elementBody.innerText = `Body: ${body}`;
    elementTitle.innerText = `Title: ${title}`;
    fetch("http://localhost:3000/users/2").then(response => response.json()).then(data => {
    username = data.username;
    email = data.email;
    elementUsername= document.createElement('li');
    elementEmail = document.createElement('li');
    elementUsername.innerText = `Username: ${username}`;
    elementEmail.innerText = `Title: ${email}`;
    fetch("http://localhost:3000/comments").then(response => response.json()).then(data => {
    author1 = data[200].email;
    comment1 = data[200].body;
    elementAuthor1= document.createElement('li');
    elementComment1 = document.createElement('li');
    elementAuthor1.innerText = `Author: ${author1}`;
    elementComment1.innerText = `Comment: ${comment1}`;
    ul.appendChild(elementUsername);
    ul.appendChild(elementEmail);
    ul.appendChild(elementTitle);
    ul.appendChild(elementBody);
    ul.appendChild(elementAuthor1);
    ul.appendChild(elementComment1);
    
    
})    
})
})








