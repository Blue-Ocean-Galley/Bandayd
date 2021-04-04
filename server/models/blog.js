'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Blog.belongsTo(Band);
      Band.hasMany(Blog);
    }
  }

  Blog.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    post: DataTypes.TEXT,
    bandId: {
      type: DataTypes.INTEGER,
      references: {
        model: { tableName: 'Bands' },
        key: 'id',
        allowNull: false,
      },
    },
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};
