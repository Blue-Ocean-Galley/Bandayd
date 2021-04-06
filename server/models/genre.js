const { Model } = require('sequelize');
const Band = require('./band');

module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { // eslint-disable-line no-eval
      // define association here
      Genre.hasMany(Band);
      Band.belongsTo(Genre);
    }
  }
  Genre.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};
