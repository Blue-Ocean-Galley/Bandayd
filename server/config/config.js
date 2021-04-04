
module.exports = {
  development: {
    username: 'student',
    password: 'student',
    database: 'bandayd_dev',
    host: 'localhost',
    dialect: 'mariadb',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mariadb',
  }
}
