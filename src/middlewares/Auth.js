const userAuth = (req, res, next) => {
  const token = "xyz";
  const isAuthorized = token === "xyz";
  if (!isAuthorized) {
    res.status(401).send("<h1>user is not authorized </h1>");
  } else {
    next();
  }
};

const adminAuth = (req, res, next) => {
  const token = "ddd";
  const isAuthorized = token === "xyz";

  if (!isAuthorized) {
    res.status(401).send("<h1>admin is not authorized </h1>");
  } else {
    next();
  }
};

module.exports = {
  userAuth,
  adminAuth,
};
