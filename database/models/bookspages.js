'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BooksPages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BooksPages.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    bookId: DataTypes.NUMBER,
    pageNumber: DataTypes.NUMBER,
    content: DataTypes.STRING,
    contentFormat: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'BooksPages',
  });
  return BooksPages;
};