const logger = require('./winston');

module.exports = {
  development: {
    username: 'student',
    password: 'student',
    database: 'bandayd_dev',
    host: 'localhost',
    dialect: 'mariadb',
    migrationStorage: 'sequelize',
    seederStorage: 'sequelize',
    logging: (msg) => logger.debug(msg),
    pool: {
      max: 200,
      min: 0,
      acquire: 30000,
      idle: 5000,
    }
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    migrationStorage: 'sequelize',
    seederStorage: 'sequelize',
    logging: (msg) => logger.debug(msg),
    pool: {
      max: 200,
      min: 0,
      acquire: 30000,
      idle: 5000,
    }
  },
  test: {
    username: 'root',
    password: 'root',
    database: 'bandayd_dev',
    host: 'localhost',
    dialect: 'mariadb',
    migrationStorage: 'sequelize',
    seederStorage: 'sequelize',
    logging: (msg) => logger.debug(msg),
  },
};
