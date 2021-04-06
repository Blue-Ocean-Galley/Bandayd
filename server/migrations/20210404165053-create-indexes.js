'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addIndex('Blogs', { fields: ['bandId'] }, { transaction: t }),
        queryInterface.addIndex('Shows', { fields: ['bandId'] }, { transaction: t }),
        queryInterface.addIndex('Songs', { fields: ['bandId'] }, { transaction: t }),
      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeIndex('Blogs', { fields: ['bandId'] }, { transaction: t }),
        queryInterface.removeIndex('Shows', { fields: ['bandId'] }, { transaction: t }),
        queryInterface.removeIndex('Songs', { fields: ['bandId'] }, { transaction: t }),
      ])
    })
  }
};
