const express = require('express');
// const logger = require('../../config/winston');
const { login } = require('../controllers/login');

const router = express.Router();

router.route('/')
  .post(login)
  .get((req, res) => {
    res.status(403).send('Why are you trying to get something back from login? You weirdo!');
  });

module.exports = router;
