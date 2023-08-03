import  jwt  from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.headers["x-auth-token"];

  if (!token) {
    return res.status(400).json({
      message: "token is not provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(403).json({
        message: "token is expired",
      });
    }
  }
  return res.status(401).json({
    message: "token is not valid",
  });
};

export default authMiddleware;
