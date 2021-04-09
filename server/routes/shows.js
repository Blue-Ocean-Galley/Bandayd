const express = require('express');
// const logger = require('../../config/winston');
const { getShows, getBandShows, addShow } = require('../controllers/shows');

const router = express.Router();

// takes page and count as query parameters
router.get('/', getShows);
// takes bandID as parameter and returns a list of shows for that band
router.get('/:bandID', getBandShows);

module.exports = router;
