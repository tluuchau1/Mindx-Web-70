import express from "express";
import { posts } from "../units/mockData.js";
import { v4 as uuid4 } from "uuid";

const routers = express.Router();

routers.get("/", (req, res) => {
  res.json({
    data: posts,
  });
});

// Get posts by id
routers.get("/:id", (req, res) => {
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
routers.post("/", (req, res) => {
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
routers.put("/:id", (req, res) => {
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
routers.delete("/:id", (req, res) => {
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

export default routers;
