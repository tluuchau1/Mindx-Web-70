import express from "express";
import router from "./routes/index.js";
// import { apiLogMiddleware } from "./middlewares/apiLog.middlewares.js";


const app = express();
const PORT = 5050;
const API_Version = 3;

// router.use(apiLogMiddleware);

app.use(`/api/v${API_Version}`, router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
