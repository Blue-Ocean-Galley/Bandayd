require('dotenv').config();
const express = require('express');
const path = require('path');
const compression = require('compression');
const logger = require('../config/winston');

const app = express();

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

app.use(compression());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '/client/dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/client/dist', 'index.html'));
});

app.listen(PORT, HOSTNAME, () => {
  logger.info(`Serving static files on ${HOSTNAME}:${PORT}!`);
});

