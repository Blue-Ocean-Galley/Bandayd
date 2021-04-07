const express = require('express');
const logger = require('../config/winston');
const bands = require('./routes/bands');
const app = express();

const PORT = process.env.SERVER_PORT || 3010;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

app.use(express.json());

app.listen(PORT, HOSTNAME, () => {
  logger.info(`Server listening on ${HOSTNAME}:${PORT}`);
});

app.use(bands);
