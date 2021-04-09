'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('Songs', 'url', {
          type: Sequelize.TEXT,
        }, { transaction: t })
      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryinterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Songs', 'url', { transaction: t })
      ])
    })
  }
};
