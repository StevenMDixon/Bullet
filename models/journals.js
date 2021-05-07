const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/config');

// create our User model
class Journal extends Model {}

Journal.init(
{
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Journal'
  }
);
Journal.associate = models => {
  Journal.belongsTo(models.User);
}


module.exports = Journal;