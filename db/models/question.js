'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme, Answer}) {
      // define association here
      Question.belongsTo(Theme, {foreignKey: 'theme_id'});
      Question.belongsTo(Answer, {foreignKey: 'id'})
    }
  }
  Question.init({
    theme_id: {
      type: DataTypes.INTEGER
    },
    question: {
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
    modelName: 'Question',
    tableName: 'Questions'
  });
  return Question;
};
