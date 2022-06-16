const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const { all } = require('../routes/api/category-routes.js');
const Product = require('./Product.js');
const Tag = require('./Tag.js');

class Category extends Model { }

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);




module.exports = Category;
