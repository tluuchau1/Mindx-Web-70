import express from "express";
import { posts } from "./data/posts.js";

const app = express();
const port = 3001;
app.use(express.json());

app.get("/posts", (request, response) => {
  response.json(posts);
});

app.get("/posts/search", (req, res) => {
  const data = posts.filter((post) => post.title.includes(req.query.query));
  if (data > 0) {
    res.json(data);
  } //else {
  res.json({ code: 404, message: "posts not found" });
  // }
});

app.post('/posts/add', (req, res) => {
  const data = req.body;
  posts.push({
    id: 9999,
    ...data,
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
