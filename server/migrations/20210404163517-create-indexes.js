'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addIndex('Bands', { fields: ['genreId'] });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('Bands', { fields: ['genreId'] });
  }
};
