const { DataTypes } = require('sequelize');

const categoriesAttributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const Category = sequelize.define(
    'Category',
    categoriesAttributes,
    {
      timestamps: false,
      tableName: 'Categories',
    },
  );

  return Category;
};
