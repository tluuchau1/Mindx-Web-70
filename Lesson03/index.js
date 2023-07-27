import express from "express";
import { posts } from "./units/mockData.js  ";
import { v4 as uuid4 } from "uuid";

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello to our Socials app API");
});

// API for Post resource
// Get all posts
app.get("/api/v1/posts", (req, res) => {
  res.json({
    data: posts,
  });
});
// Get posts by id
app.get("/api/v1/posts/:id", (req, res) => {
  // Step 1: Get post Id  
  const postsId = req.params.id;

  // Step 2: find post by id in database
  const exitingPost = posts.find((post) => post.id === postsId);

  // Step 3: Validate
  if (!exitingPost) {
    return res.json({
      message: "Not found",
    });
  }
  // Step 4: response client
  res.json({
    data: exitingPost,
  });
});

// create new post
app.post("/api/v1/posts", (req, res) => {
  const body = req.body;
  // API body validation (?)

  const newPost = {
    ...body,
    id: uuid4(),
  };

  posts.push(newPost);

  res.json({
    message: "create new post",
  });
});

//update a post 
app.put("/api/v1/posts/:id", (req, res) => {
  const postsId = req.params.id;
  const body = req.body;

  let exitingPost = posts.findIndex((post) => post.id === +postsId);

  if (exitingPost === -1) {
    return res.json({
      message: "resource is not exit",
    });
  }

  const updatedPost = {
    ...posts[exitingPost],
    ...body,
  };

  posts[exitingPost] = updatedPost;

  return res.json({
    message: "cap nhat thanh cong",
  });
});
// Delete post
app.delete("/api/v1/posts/:id", (req, res) => {
  const postsId = req.params.id;
  let exitingPost = posts.findIndex((post) => post.id === +postsId);

  if (exitingPost === -1) {
    return res.json({
      message: "not found",
    });
  }

  posts.splice(exitingPost, 1);

  return res.json({
    message: "xoa thanh cong",
  });
});



app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

/*
    (**) HTTP method
        GET 
        POST
        PUT
        PATCH
        DELETE
            - soft delete => PUT
            - hard delete => DELETE
    
    (**) HTTP Status code
        2xx: 200, 201, 204... => Successfully
        4xx: 400, 401, 403,400... => Client error
        5xx: 500 => Server error

    (**) RESTful API
    (**) Resources: posts
        Base URL: http://localhost:3001/api/v1/
        + Get all posts: (R - Read)
            . /posts
            . Method: GET 

        + Get post by id (R - Read)
            . /posts/:id
            . Method: GET

        + Create post (C - Create)
            . Method: POST
            . /posts
            . request body

        + Update post by id (U - Update)
            . Method: PUT/PATCH
            . /posts/:id
            . request body

        + Delete post by id (D - Delete)
            . Method: DELETE
            . /posts/:id

       C------R--------U-----------D
    Post     GET    PUT/PATCH   Delete

    (**) Request params, request query, request body
    
    - Query 
        . API: http://localhost:3001/api/v1/posts?page=1&size=50
        . Method: GET
        . req.query:
            {   
               page: 1,
               size: 50
            }
    
    - Params:
        . API: http://localhost:3001/api/v1/posts/:id
        . id -> param
    
    - Request body: Post, Put, Patch
*/
