'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Blog.belongsTo(models.Band, {
        foreignKey: 'BandId',
      });
    }
  };
  Blog.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    post: DataTypes.TEXT,
    BandId: {
      type: DataTypes.INTEGER,
      references: {
        modelName: { tableName: 'Bands' },
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};