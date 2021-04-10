const express = require('express');
// const logger = require('../../config/winston');
const { addUser } = require('../controllers/signup');

const router = express.Router();

router.route('/')
  .post(addUser)
  .get((req, res) => {
    // just for laughs - remove before going to prod please
    res.status(403).send('Why are you trying to get something back from login? You weirdo!');
  });

module.exports = router;
