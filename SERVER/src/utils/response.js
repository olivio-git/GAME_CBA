const response = (res, statusCode, payload) => {
  res.status(statusCode).json({
    error: false,
    payload,
  });
};

export default response;
