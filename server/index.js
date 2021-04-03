const express = require('express');
const path = require('path');
// const db = require('../database/dbQueries.js');

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

const app = express();

app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(express.json());

app.get('/', (res) => {
  res.send('hello there');
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server listening at ${HOSTNAME}:${PORT}!`);
});
