'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentFormat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ContentFormat.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    formatName: DataTypes.STRING,
    shortName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ContentFormat',
  });
  return ContentFormat;
};