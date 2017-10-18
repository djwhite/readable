const api = "http://localhost:3001";

// Generate a unique token for storing post data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

// CATEGORIES API
// -- GET

export const getCategories = () =>
  fetch(`${api}/categories/`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

// POSTS API
// -- GET

export const getPostsForCategory = category =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json());

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json());

export const getPostById = id =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json());

// -- POST

export const addPost = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json());

export const upvotePost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: 'upVote'  })
  }).then(res => res.json());

export const downVotePost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: 'downVote'  })
  }).then(res => res.json());

// -- PUT

export const updatePost = (post) =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: post.title,
      body: post.body
    })
  }).then(res => res.json());

// -- DELETE

export const deletePost = (id) =>
  fetch(`${api}/posts/${id}`, { method: 'DELETE', headers: { headers } })
    .then(res => res.json());

// COMMENTS API
// -- GET

// TODO
