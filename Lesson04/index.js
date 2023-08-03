import express from "express";
import router from "./routes/index.js";
import "dotenv/config";

export const stats = [];

const app = express();
const PORT = 3001;
const API_Version = 1;
app.use(express.json());

app.get(`/api/v${API_Version} /system/statistic`, (req, res) => {
  return res.json(stats);
});

app.use(`/api/v${API_Version}`, router);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
