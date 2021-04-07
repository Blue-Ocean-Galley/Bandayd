const express = require('express');
// const logger = require('../../config/winston');
const { getGenres, getOneGenre } = require('../controllers/genres');

const router = express.Router();

// takes page and count as query parameters
router.get('/', getGenres);
// takes genreId as parameter returns just the genre
router.get('/:genreId', getOneGenre);

module.exports = router;
