const catchedAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res).catch((error) => next(error));
  };
};

export default catchedAsync;
