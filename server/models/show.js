'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Show.belongsTo(models.Band, {
        foreignKey: 'BandId',
      });
    }
  };
  Show.init({
    name: DataTypes.STRING,
    showDate: DataTypes.DATE,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    city: DataTypes.STRING(64),
    state: DataTypes.STRING(64),
    country: DataTypes.STRING(64),
    BandId: {
      type: DataTypes.INTEGER,
      references: {
        model: { tableName: 'Bands' },
        key: 'id',
      },
    }
  }, {
    sequelize,
    modelName: 'Show',
  });
  return Show;
};