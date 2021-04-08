const express = require('express');
// const logger = require('../config/winston');
const { getSongs, getOneSong, addOneSong } = require('../controllers/songs');

const router = express.Router();

router.route('/:bandId')
  .get(getSongs)
  .post(addOneSong);

router.get('/:bandId/:songId', getOneSong);

// We don't have an album ID field right now so it's not possible to get all songs for a given album

module.exports = router;
