import { data } from "../data/users.js";

export const authMiddlewares = (req, res, next) => {
  const api_key = req.query.api_key;

  if (!api_key) {
    return res.status(400).json({
      message: "missing an API key",
    });
  }

  const isValidApiKey = data.findIndex((user) => user.apiKey === api_key);

  if (isValidApiKey === -1) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  next();
};
