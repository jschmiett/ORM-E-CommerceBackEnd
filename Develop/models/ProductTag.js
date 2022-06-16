const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const { all } = require('../routes/api/category-routes.js');
const Category = require('./Category');
const Product = require('./Product.js');
const Tag = require('./Tag');

class ProductTag extends Model { }

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      // references the Product model's id
    },
    tag_id: {
      type: DataTypes.INTEGER,
      // references the Tag model's id
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
