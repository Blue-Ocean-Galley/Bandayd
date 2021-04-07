module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shows', [
      {
        "id": 1,
        "name": "Aerified",
        "showDate": "2020-04-11 05:33:29",
        "city": "Penamacor",
        "state": "Castelo Branco",
        "country": "Portugal",
        "bandId": 1,
        "latitude": 40.1686749,
        "longitude": -7.1721914,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 2,
        "name": "Subin",
        "showDate": "2020-07-19 09:08:35",
        "city": "Vila Velha de Ródão",
        "state": "Castelo Branco",
        "country": "Portugal",
        "bandId": 2,
        "latitude": 39.6545102,
        "longitude": -7.6712121,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 3,
        "name": "Sonair",
        "showDate": "2021-01-04 02:53:24",
        "city": "Orvalho",
        "state": "Castelo Branco",
        "country": "Portugal",
        "bandId": 3,
        "latitude": 40.0233496,
        "longitude": -7.7912472,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 4,
        "name": "Lotlux",
        "showDate": "2020-10-19 12:26:50",
        "city": "Aranhas",
        "state": "Castelo Branco",
        "country": "Portugal",
        "bandId": 4,
        "latitude": 40.1122778,
        "longitude": -7.121411,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 5,
        "name": "Wrapsafe",
        "showDate": "2020-06-10 11:11:08",
        "city": "Vila Velha de Ródão",
        "state": "Castelo Branco",
        "country": "Portugal",
        "bandId": 1,
        "latitude": 39.6545102,
        "longitude": -7.6712121,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 6,
        "name": "Lotstring",
        "showDate": "2020-11-18 04:56:00",
        "city": "Proença-a-Nova",
        "state": "Castelo Branco",
        "country": "Portugal",
        "bandId": 1,
        "latitude": 39.7494186,
        "longitude": -7.9233898,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 7,
        "name": "Bitchip",
        "showDate": "2020-10-17 21:10:02",
        "city": "Rosmaninhal",
        "state": "Castelo Branco",
        "country": "Portugal",
        "bandId": 4,
        "latitude": 39.7298157,
        "longitude": -7.0865116,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 8,
        "name": "Ventosanzap",
        "showDate": "2020-04-08 12:17:56",
        "city": "Salvador",
        "state": "Castelo Branco",
        "country": "Portugal",
        "bandId": 3,
        "latitude": 40.0896078,
        "longitude": -7.0929707,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 9,
        "name": "Alphazap",
        "showDate": "2020-05-14 01:50:36",
        "city": "Idanha-a-Nova",
        "state": "Castelo Branco",
        "country": "Portugal",
        "bandId": 2,
        "latitude": 39.9226488,
        "longitude": -7.2372538,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 10,
        "name": "Asoka",
        "showDate": "2020-10-10 11:42:22",
        "city": "Águas",
        "state": "Castelo Branco",
        "country": "Portugal",
        "bandId": 1,
        "latitude": 40.1128037,
        "longitude": -7.205968,
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shows', null, {});
  }
};
