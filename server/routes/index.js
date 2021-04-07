const express = require('express');
const bands = require('./bands');
const login = require('./login');
const router = express.Router();

// all login routes
router.use('/login', login);
// all band routes
router.use('/bands', bands);


// all show routes

// all song routes

module.exports = router;