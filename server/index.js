const express = require('express');
const path = require('path');
const logger = require('../config/winston');

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

const app = express();

app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(express.json());

app.get('/', (res) => {
  res.send('hello there');
});

app.get('/hello', (req, res) => {
  // this is just a test of logging types
  const caller = req.query.name || 'Anonymous Caller';
  logger.info(`Caller is ${caller}`);
  res.send({ Hello: caller });
});

app.get('/error', (req, res) => {
  const error = new Error('This is an example error');
  logger.error(`The error is ${error}`);
  res.send({ Error: error });
});

app.listen(PORT, HOSTNAME, () => {
  logger.info(`Server listening at ${HOSTNAME}:${PORT}!`);
});
