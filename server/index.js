require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('../config/winston');

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

const app = express();

app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(express.json());

app.listen(PORT, HOSTNAME, () => {
  logger.info(`Serving static files on ${HOSTNAME}:${PORT}!`);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/client/dist', 'index.html'));
});
