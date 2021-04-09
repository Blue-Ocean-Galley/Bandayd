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

<<<<<<< HEAD
<<<<<<< HEAD
=======
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/client/dist', 'index.html'));
});
>>>>>>> 8ccc3aeb44b556574b48cc93dc30ff39d17596d6
=======
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/client/dist', 'index.html'));
});
>>>>>>> 7d30e3e353826adf7ac9b3cc73e734619f8754e8
