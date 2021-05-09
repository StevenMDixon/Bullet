const Journal = require('./journals');
const User = require('./users');

User.hasMany(Journal, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Journal.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = {journalModel: Journal, userModel: User};