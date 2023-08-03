import express from "express";

const routers = express.Router();

routers.get("/", (req, res) => {
  res.send("comments api");
});

export default routers;
