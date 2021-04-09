const express = require('express');

const login = require('./login');
const signup = require('./signup');
const bands = require('./bands');
const songs = require('./songs');
const genres = require('./genres');
const blogs = require('./blogs');

const router = express.Router();

// all login routes
router.use('/login', login);
router.use('/signup', signup);
// all band routes
router.use('/bands', bands);
// all song routes
router.use('/songs', songs);
// all genre routes
router.use('/genres', genres);
// all show routes
router.use('/blogs', blogs);
// all song routes

module.exports = router;
