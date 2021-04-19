const sequelize = require('../config');
const User = require('../../models/users');

const userData = [
  {
    username: "bob",
    password: "1234"
  }
];

  module.exports = () => User.bulkCreate(userData);