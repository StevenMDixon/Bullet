const requireAuth = (req, res, next) => {
    if (!req.session.userId) {
      //res.redirect("/login");
      res.sendStatus(403);
    } else {
      next();
    }
  };
  
module.exports = requireAuth;