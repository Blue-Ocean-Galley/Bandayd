const express = require('express');

const login = require('./login');
const bands = require('./bands');
const genres = require('./genres');
const blogs = require('./blogs');

const router = express.Router();

// all login routes
router.use('/login', login);
// all band routes
router.use('/bands', bands);
// all genre routes
router.use('/genres', genres);
// all show routes
router.use('/blogs', blogs);
// all song routes

module.exports = router;
