'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn('Bands', 'email', {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        }, { transaction: t })
      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn('Bands', 'email', {
          type: Sequelize.STRING,
          unique: false,
          allowNull: true,
        }, { transaction: t })
      ])
    })
  }
};
