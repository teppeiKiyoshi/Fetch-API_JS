let btn_getText = document.getElementById('getText');
let pHolder = document.getElementById('users-container');

btn_getText.addEventListener('click', getText);

function getText() {
  // fetch('sample.txt')
  //   .then(function (response) {
  //     return response.text();
  //   })
  //   .then(function (data) {
  //     pHolder.innerHTML = data;
  //   });

  // USING ARROW FUNCTION
  fetch('sample.txt').then((response) =>
    response
      .text()
      .then((data) => {
        pHolder.innerHTML = data;
      })
      .catch((err) => console.log(err))
  );
}

// GET USERS
let btn_getUsers = document.getElementById('getUsers');
btn_getUsers.addEventListener('click', getUsers);

function getUsers() {
  fetch('users.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let output = '<h2 class="mb-4">Users</h2>';
      data.forEach(function (user) {
        output += `
          <ul class="list-group mb-3">
            <li class="list-group-item"><strong>ID:</strong> ${user.id}</li>
            <li class="list-group-item"><strong>Name:</strong> ${user.name}</li>
            <li class="list-group-item"><strong>Email:</strong> ${user.email}</li>
          </ul>
        `;
      });
      document.getElementById('users-container').innerHTML = output;
    });
}

// GET POSTS
let btn_getPosts = document.getElementById('getPosts');
btn_getPosts.addEventListener('click', getPosts);

function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let output = '<h2 class="mb-4">Posts</h2>';
      data.forEach(function (post) {
        output += `
          <div class="card card-body mb-3">
            <h3>Title: ${post.title}</h3>
            <p>Body: ${post.body}</p>
          </div>
        `;
      });
      document.getElementById('users-container').innerHTML = output;
    });
}

// FORM FUNCTIONS
let formPost = document.getElementById('addPost');
formPost.addEventListener('submit', addPost);

function addPost(e) {
  e.preventDefault();
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
