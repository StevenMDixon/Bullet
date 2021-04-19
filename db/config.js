const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const database = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
});

//database.sync({ force: false });

module.exports = database;