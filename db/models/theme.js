'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    
    static associate() {
      // define association here
      Theme.hasMany(Question, {foreignKey: 'id'})
    }
  }
  Theme.init({
    desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Theme',
    tableName: 'Themes'
  });
  return Theme;
};
