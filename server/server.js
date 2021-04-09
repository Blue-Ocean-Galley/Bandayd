const express = require('express');
const cors = require('cors');
const logger = require('../config/winston');
const router = require('./routes');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const PORT = process.env.SERVER_PORT || 3010;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

app.use(express.json());

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(PORT, HOSTNAME, () => {
  logger.info(`Server listening on ${HOSTNAME}:${PORT}`);
});

module.exports = app;
