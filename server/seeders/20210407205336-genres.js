const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', [
      {
        "id": 1,
        "genre": "Black Metal",
        createdAt,
        updatedAt
      },
      {
        "id": 2,
        "genre": "Christian",
        createdAt,
        updatedAt
      },
      {
        "id": 3,
        "genre": "Crust Punk",
        createdAt,
        updatedAt
      },
      {
        "id": 4,
        "genre": "Death Metal",
        createdAt,
        updatedAt
      },
      {
        "id": 5,
        "genre": "Djent",
        createdAt,
        updatedAt
      },
      {
        "id": 6,
        "genre": "Fantasy",
        createdAt,
        updatedAt
      },
      {
        "id": 7,
        "genre": "Gothic",
        createdAt,
        updatedAt
      },
      {
        "id": 8,
        "genre": "Grindcore",
        createdAt,
        updatedAt
      },
      {
        "id": 9,
        "genre": "Hair Metal",
        createdAt,
        updatedAt
      },
      {
        "id": 10,
        "genre": "Industrial",
        createdAt,
        updatedAt
      },
      {
        "id": 11,
        "genre": "Metalcore",
        createdAt,
        updatedAt
      },
      {
        "id": 12,
        "genre": "Thrash",
        createdAt,
        updatedAt
      },
      {
        "id": 13,
        "genre": "Viking",
        createdAt,
        updatedAt
      }
     ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, {});
  }
};
