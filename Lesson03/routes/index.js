import express from "express";
import postRouter from "./posts.js";
import userRouter from "./users.js";
import commentRouter from "./comments.js";
import studentsRouter from "./students.js";
import teacherRouter from "./teacher.js";
import subjectRouter from "./subject.js";
import checkApi from "../middlewares/checkApi.js";
import statistic from "../middlewares/stats.js";
const router = express.Router();

router.use("/posts", postRouter);
router.use("/users", userRouter);
router.use("/comments", commentRouter);
router.use(
  "/students",
  
  checkApi,
  statistic("students"),
  studentsRouter
);
router.use("/teacher",  checkApi, statistic("teacher"), teacherRouter);
router.use("/subject",  checkApi, statistic("subject"), subjectRouter);

export default router;
