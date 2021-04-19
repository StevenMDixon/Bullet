const sequelize = require('../config');
const Journal = require('../../models/journals');

const journalData = [
  {
    name: "bobs journal",
    created_date: "12/1/20"
  }
];

  module.exports = () => Journal.bulkCreate(journalData);