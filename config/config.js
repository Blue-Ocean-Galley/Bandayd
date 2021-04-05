const logger = ('../../config/winston');

module.exports = {
  development: {
    username: 'student',
    password: 'student',
    database: 'bandayd_dev',
    host: 'localhost',
    dialect: 'mariadb',
    logging: msg => logger.debug(msg),
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    logging: msg => logger.debug(msg),
  },
};
