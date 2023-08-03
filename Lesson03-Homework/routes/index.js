import express from "express";
import studentsRouter from "./students.router.js";
import teacherRouter from "./teacher.router.js";
import subjectRouter from "./subject.router.js";
import { apiLogMiddleware } from "../middlewares/apiLog.middlewares.js";
import { authMiddlewares } from "../middlewares/auth.middlewares.js";
const router = express.Router();

router.use("/students", apiLogMiddleware, authMiddlewares, studentsRouter);
router.use("/teacher", apiLogMiddleware, authMiddlewares, teacherRouter);
router.use("/subject", apiLogMiddleware, authMiddlewares, subjectRouter);

export default router;
