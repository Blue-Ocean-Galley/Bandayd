const express = require('express');
const compression = require('compression');
const cors = require('cors');
const logger = require('../config/winston');
const router = require('./routes');

const app = express();

const PORT = process.env.SERVER_PORT || 3010;
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(compression());
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', router);

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(PORT, HOSTNAME, () => {
  logger.info(`Server listening on ${HOSTNAME}:${PORT}`);
});

module.exports = app;
