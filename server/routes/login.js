const express = require('express');
const logger = require('../config/winston');

const router = express.Router();

router.route('/login')
  .post((req, res) => {
    // add a user
  })
  .get((req, res) => {
    // get some kind of session information
  });
