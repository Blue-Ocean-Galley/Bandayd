const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { // eslint-disable-line no-eval
      // define association here
      models.Band.hasMany(Show);
      Show.belongsTo(models.Band);
    }
  }

  Show.init({
    name: DataTypes.STRING,
    // bandName: DataTypes.TEXT,
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
