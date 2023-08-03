import data from "../units/studentsData.js";

const checkApi = (req, res, next) => {
  const api_key = req.query.api_key;

  if (!api_key) {
    return res.status(400).json({
      message: "Missing an Api Key",
    });
  }

  const isValidApiKey = data.findIndex((user) => user.apiKey === api_key);

  if (isValidApiKey === -1) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }

  next();
};

export default checkApi;
