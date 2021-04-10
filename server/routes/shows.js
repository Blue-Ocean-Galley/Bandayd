const express = require('express');
const { getShows, getBandShows, addShow } = require('../controllers/shows');

const router = express.Router();

// parse application/json
router.use(express.json());

// takes page and count as query parameters
router.get('/', getShows);

// takes bandID as parameter and returns a list of shows for that band
router.get('/:bandID', getBandShows);

// takes bandID as a parameter and inserts a new show with info from the body
router.post('/', addShow);

module.exports = router;
