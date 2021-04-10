const express = require('express');
// const logger = require('../../config/winston');
const bodyParser = require('body-parser')

const { getShows, getBandShows, addShow } = require('../controllers/shows');

const router = express.Router();
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

// takes page and count as query parameters
router.get('/', getShows);

// takes bandID as parameter and returns a list of shows for that band
router.get('/:bandID', getBandShows);

// takes bandID as a parameter and inserts a new show with info from the body
router.post('/', addShow);

module.exports = router;
