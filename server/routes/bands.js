const express = require('express');
const logger = require('../config/winston');

const router = express.Router();

router.route('/bands')
  .get((req, res) => {
    // get some number of bands
  });

router.get('/band/:id', (req, res) => {
  // get one band
});
