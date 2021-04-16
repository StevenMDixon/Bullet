const router = require("express").Router();

router.use("/api/user", require('./api/users'));

module.exports = router;