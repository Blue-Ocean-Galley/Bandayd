const express = require('express');
// const logger = require('../../config/winston');
const { addUser } = require('../controllers/login');

const router = express.Router();

router.route('/')
  .post(addUser)
  .get((res) => {
    res.status(403).send('Why are you trying to get something back from login? You weirdo!');
  });

module.exports = router;
