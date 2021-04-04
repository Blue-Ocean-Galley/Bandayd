'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('Bands', 'genreId', {
          type: Sequelize.INTEGER,
          references: {
            model: { tableName: 'Genres' },
            key: 'id',
            allowNull: false,
          }
        }, { transaction: t })
      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Bands', 'genreId', { transaction: t })
      ])
    })
  }
};
