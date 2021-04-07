const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { // eslint-disable-line no-eval
      // define association here
      models.Band.hasMany(Song);
      Song.belongsTo(models.Band);
    }
  }
  Song.init({
    title: DataTypes.STRING,
    album: DataTypes.STRING,
    trackNum: DataTypes.INTEGER(3),
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
    modelName: 'Song',
  });
  return Song;
};
