import express from "express";

const routers = express.Router();

routers.get("/", (req, res) => {
  res.send("API users");
});

export default routers;
