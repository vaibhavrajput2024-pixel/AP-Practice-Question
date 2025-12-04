function checkAccess(req, res, next) {
    const user = req.params.user;
    if (user.includes("READ_WRITE")) {
      next();
    } else {
      return res.status(403).json({ message: "Access Denied" });
    }
  }
  
  module.exports = checkAccess;
  