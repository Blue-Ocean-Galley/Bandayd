'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('Shows', 'latitude', {
          type: Sequelize.FLOAT
        }, { transaction: t }),
        queryInterface.addColumn('Shows', 'longitude', {
          type: Sequelize.FLOAT
        }, { transaction: t }),
      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Shows', 'latitude', { transaction: t }),
        queryInterface.removeColumn('Shows', 'longitude', { transaction: t }),
      ])
    })
  }
};
