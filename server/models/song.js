'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Song.belongsTo(models.Band, {
        foreignKey: 'BandId',
      });
    }
  };
  Song.init({
    title: DataTypes.STRING,
    album: DataTypes.STRING,
    track: DataTypes.INTEGER(3),
    url: DataTypes.TEXT,
    BandId: {
      type: DataTypes.INTEGER,
      references: {
        model: { tableName: 'Bands' },
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};