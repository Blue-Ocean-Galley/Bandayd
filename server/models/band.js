'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Band.belongsTo(models.Genre, {
        foreignKey: 'GenreId',
      });
      Band.hasMany(models.Blog, {
        foreignKey: 'BandId',
      });
      Band.hasMany(models.Show, {
        foreignKey: 'BandId',
      });
      Band.hasMany(models.Song, {
        foreignKey: 'BandId',
      });
    }
  };
  Band.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    description: DataTypes.TEXT,
    profilePhotoUrl: DataTypes.TEXT,
    GenreId: {
      type: DataTypes.INTEGER,
      references: {
        model: { tableName: 'Genres' },
        key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    }
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};