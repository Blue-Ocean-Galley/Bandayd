const axios = require('axios');
const express = require('express');
const db = require('../database/dbQueries.js');
const bodyParser = require('body-parser')
const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('hello there')
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});
