import express from "express";
import jwt from "jsonwebtoken";

const users = [
  {
    id: 1,
    username: "alice",
    password: "alice@123",
    fullname: "alice H",
  },
  {
    id: 2,
    username: "bob",
    password: "bob@123",
    fullname: "bobby",
  },
  {
    id: 3,
    username: "Charlie",
    password: "Charlie@123",
    fullname: "Charlie Put",
  },
];

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  //1. Validation
  if (!username || !password) {
    return res.status(400).json({
      message: "Missing required keys",
    });
  }

  //2. check authentication
  const existingUser = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!existingUser) {
    return res.status(401).json({
      message: "Invalid username or password!",
    });
  }

  //   3. Generate access token (JWT)
  //   - Header: thuật toán mã hoá(HS256) + loại token(JWT)
  //   - Body: chứa thông tin mà developer muốn đính kèm vào token (Thông tin không nhạy cảm)
  //   - Footer: chứa thông tin về chữ ký (khoá bí mật -> SECRET_KEY)
  //   - Mỗi thành phần cách nhau bởi dấu "."

  const jwtPayload = {
    id: existingUser.id,
    fullname: existingUser.fullname,
    username: existingUser.username,
    password: existingUser.password,
  };

  const token = jwt.sign(jwtPayload, process.env.SECRET_KEY, {
    expiresIn: "60s",
  });

  res.json({
    user: jwtPayload,
    accessToken: token,
  });
});

export default router;
