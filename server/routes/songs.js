const express = require('express');
//const logger = require('../config/winston');
const { getSongs } = require('../controllers/songs');

const router = express.Router();

router.get('/:bandId', getSongs);

// router.get('/songs/:bandId/:songId', (req, res) => {
//   // get one song by artist
// });

// We don't have an album ID field right now so it's not possible to get all songs for a given album

module.exports = router;
