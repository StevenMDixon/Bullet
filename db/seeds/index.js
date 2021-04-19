const sequelize = require('../config');

const userSeed = require('./user-seed');
const journalSeed = require('./journal-seed');

async function seedDB(){
    await sequelize.sync({ force: true });
    await userSeed();
    await journalSeed();

    process.exit(0);
}

seedDB();