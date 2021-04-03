'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bands', [{
      bandName: 'Zach\'s Metal Band',
      description: 'This is a great band started by Zach featuring the Galley team',
      email: 'myemail@example.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Bands', null, {});
  },
};
