const express = require('express');

const login = require('./login');
const signup = require('./signup');
const bands = require('./bands');
const genres = require('./genres');

const router = express.Router();

// all login routes
router.use('/login', login);
router.use('/signup', signup);
// all band routes
router.use('/bands', bands);
// all genre routes
router.use('/genres', genres);
// all show routes

// all song routes

module.exports = router;
