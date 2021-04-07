const express = require('express');

const login = require('./login');
const bands = require('./bands');
const songs = require('./songs');

const router = express.Router();

// all login routes
router.use('/login', login);
// all band routes
router.use('/bands', bands);
// all song routes
router.use('/songs', songs)
// all show routes


module.exports = router;
