const express = require('express');
const compression = require('compression');
const cors = require('cors');
const logger = require('../config/winston');
const router = require('./routes');

const app = express();

const PORT = process.env.SERVER_PORT || 3010;
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(compression({
  level: 6,
  memLevel: 6,
}));
app.use(cors(corsOptions));
app.use(express.json());
app.get('/', (req, res) => {
  res.send('hello');
});
app.use('/api', router);

app.listen(PORT, HOSTNAME, () => {
  logger.info(`Server listening on ${HOSTNAME}:${PORT}`);
});

module.exports = app;
