const { Model } = require('sequelize');
const Band = require('./band');

module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { // eslint-disable-line no-eval
      // define association here
      Band.hasMany(Show);
      Show.belongsTo(Band);
    }
  }

  Show.init({
    name: DataTypes.STRING,
    showDate: DataTypes.DATE,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
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
    modelName: 'Show',
  });
  return Show;
};
