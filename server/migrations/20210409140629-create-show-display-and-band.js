'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('Shows', 'displayName', {
          type: Sequelize.TEXT
        }, { transaction: t }),
        queryInterface.addColumn('Shows', 'bandName', {
          type: Sequelize.TEXT
        }, { transaction: t }),
      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Shows', 'displayName', { transaction: t }),
        queryInterface.removeColumn('Shows', 'bandName', { transaction: t }),
      ])
    })
  }
};
