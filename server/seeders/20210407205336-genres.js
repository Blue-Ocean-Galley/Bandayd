const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', [
      {
        "id": 1,
        name: "Black Metal",
        createdAt,
        updatedAt
      },
      {
        "id": 2,
        name: "Christian",
        createdAt,
        updatedAt
      },
      {
        "id": 3,
        name: "Crust Punk",
        createdAt,
        updatedAt
      },
      {
        "id": 4,
        name: "Death Metal",
        createdAt,
        updatedAt
      },
      {
        "id": 5,
        name: "Djent",
        createdAt,
        updatedAt
      },
      {
        "id": 6,
        name: "Fantasy",
        createdAt,
        updatedAt
      },
      {
        "id": 7,
        name: "Gothic",
        createdAt,
        updatedAt
      },
      {
        "id": 8,
        name: "Grindcore",
        createdAt,
        updatedAt
      },
      {
        "id": 9,
        name: "Hair Metal",
        createdAt,
        updatedAt
      },
      {
        "id": 10,
        name: "Industrial",
        createdAt,
        updatedAt
      },
      {
        "id": 11,
        name: "Metalcore",
        createdAt,
        updatedAt
      },
      {
        "id": 12,
        name: "Thrash",
        createdAt,
        updatedAt
      },
      {
        "id": 13,
        name: "Viking",
        createdAt,
        updatedAt
      }
     ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, {});
  }
};
