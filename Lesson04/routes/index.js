import express from "express";
import postRouter from "./posts.js";
import userRouter from "./users.js";
import commentRouter from "./comments.js";
import studentsRouter from "./students.js";
import teacherRouter from "./teacher.js";
import subjectRouter from "./subject.js";
import logApi from "../middlewares/logApi.js";
import checkApi from "../middlewares/checkApi.js";
import statistic from "../middlewares/stats.js";
import authRouter from "./auth.route.js";
import  authMiddleware  from "../middlewares/auth.middleware.js";
const router = express.Router();

router.use("/auth", authRouter);


router.use("/posts", authMiddleware,postRouter);
router.use("/users", userRouter);
router.use("/comments", commentRouter);
router.use(
  "/students",
  logApi,
  checkApi,
  statistic("students"),
  studentsRouter
);
router.use("/teacher", logApi, checkApi, statistic("teacher"), teacherRouter);
router.use("/subject", logApi, checkApi, statistic("subject"), subjectRouter);

export default router;
