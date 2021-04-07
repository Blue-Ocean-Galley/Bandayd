module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', [
      {
        id: 1,
        name: "Action|Comedy|Crime|Drama",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Horror|Mystery",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "Comedy|Drama",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: "Thriller",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: "Comedy|Drama",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: "Musical|Romance|War",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: "Crime|Drama|Thriller",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: "Drama|Romance|War",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: "Documentary",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: "Drama",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        name: "Comedy|Drama|War",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        name: "Action|Sci-Fi|Thriller",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        name: "Drama",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        name: "Drama",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        name: "Comedy|Drama",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        name: "Comedy|Romance",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        name: "Comedy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        name: "Mystery",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        name: "Musical",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        name: "Drama",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        name: "Comedy|Drama",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22,
        name: "Action|Comedy|Romance",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 23,
        name: "Comedy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 24,
        name: "Drama",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 25,
        name: "Drama",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 26,
        name: "Comedy|Horror|Thriller",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 27,
        name: "Horror|Sci-Fi|Thriller",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 28,
        name: "Drama",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 29,
        name: "Drama|Romance",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 30,
        name: "Documentary",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 31,
        name: "Drama|Mystery|War",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 32,
        name: "Documentary",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 33,
        name: "Horror|War",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 34,
        name: "Drama|War",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 35,
        name: "Drama",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 36,
        name: "Documentary",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 37,
        name: "Action|Crime|Drama|Romance",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 38,
        name: "Drama|War",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 39,
        name: "Action|Crime",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 40,
        name: "Documentary",
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, {});
  }
};
