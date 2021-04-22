const router = require("express").Router();

const authentication = require('./authentication');
const journals = require('./journals');
const users = require('./users');

router.use('/users',  users);
router.use('/auth',  authentication);
router.use('/journals',  journals);

module.exports = router;