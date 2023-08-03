const logApi = (req, res, next) => {
  const currentDate = new Date().toISOString();
  const { method, originalUrl, body, query, params } = req;

  console.log({
    date: currentDate,
    method,
    originalUrl,
    body,
    query,
    params,
  });

  next();
};

export default logApi;
