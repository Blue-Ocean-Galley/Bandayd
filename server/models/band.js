const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /* eslint-disable no-eval */
    static associate(models) { // eslint-disable-line no-eval
      // define association here
     models.Genre.hasMany(Band);
      Band.belongsTo(models.Genre);
    }
  }
  Band.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    email: DataTypes.STRING,
    genreId: {
      type: DataTypes.STRING,
      references: {
        model: { tableName: 'Genres' },
        key: 'id',
        allowNull: false,
      }
    },
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};
