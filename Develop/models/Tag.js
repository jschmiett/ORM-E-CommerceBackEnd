const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const { all } = require('../routes/api/category-routes.js');
const Product = require('./Product');
const Category = require('./Category');
const ProductTag = require('./ProductTag');

class Tag extends Model { }

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
