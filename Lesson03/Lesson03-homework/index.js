import express from "express";
import { posts } from "../units/datahome.js";
import { v4 as uuid4 } from "uuid";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Trang này đã mở ");
});

// lấy tài nguyên Api
// Get all Posts
app.get("/api/v2/posts", (req, res) => {
  res.json({
    data: posts,
  });
});

// get post by id
app.get("/api/v2/posts/:id", (req, res) => {
  const id = req.params.id;

  const exitPost = posts.find((post) => post.id === id);

  if (!exitPost) {
    return res.json({
      status: 404,
      message: "Post not found",
    });
  }
  res.json({
    status: 200,
    data: exitPost,
  });
});

// create new post
app.post("/api/v2/posts", (req, res) => {
  const body = req.body;

  const newPost = {
    ...body,
    id: uuid4(),
  };

  posts.push(newPost);

  res.json({
    status: 201,
    message: "đã tạo thành công",
  });
});

//update posts
app.put("/api/v2/posts/:id", (req, res) => {
  const postId = req.params.id;
  const body = req.body;

  const post = posts.findIndex((post) => post.id === postId);

  if (post === -1) {
    return res.json({
      status: 404,
      message: "Post not found",
    });
  }

  const updatePosts = {
    ...posts[post],
    ...body,
  };

  posts[post] = updatePosts;

  return res.json({
    message: "đã update",
  });
});

//delete post
app.delete("/api/v2/posts/:id", (req, res) => {
  const postId = req.params.id;
  const post = posts.findIndex((post) => post.id === postId);

  if (post === -1) {
    return res.json({
      status: 404,
      message: "Post not found",
    });
  }

  posts.splice(post, 1);

  return res.json({
    message: "đã xóa",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
