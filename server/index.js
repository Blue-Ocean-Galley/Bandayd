const express = require('express');
const path = require('path');
// const db = require('../database/dbQueries.js');
const logger = require('../config/winston');
const bunyan = require('../config/bunyan');

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

const app = express();

app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(express.json());

app.get('/', (res) => {
  res.send('hello there');
});

app.get('/hello', (req, res) => {
  const caller = req.query.name || 'Anonymous Caller';
  logger.info(`Caller is ${caller}`);
  bunyan.info(`Caller is ${caller}`);
  res.send({ Hello: caller });
});

app.get('/error', (req, res) => {
  const error = new Error('This is an example error');
  logger.error(`The error is ${error}`);
  bunyan.error(`The error is ${error}`);
  res.send({ Error: error });
});

app.listen(PORT, HOSTNAME, () => {
  logger.info(`Server listening at ${HOSTNAME}:${PORT}!`);
  bunyan.info(`Server listening at ${HOSTNAME}:${PORT}!`);
});
