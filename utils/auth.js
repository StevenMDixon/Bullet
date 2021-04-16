const withAuth = (req, res, next) => {
    console.log(req)
    if (!req.session.userId) {
      res.redirect("/login");
    } else {
      next();
    }
  };
  
module.exports = withAuth;