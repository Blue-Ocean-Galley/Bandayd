const express = require('express');
const bands = require('./bands');
const router = express.Router();

// all band routes
router.use('/bands', bands);

// all login routes

// all show routes

// all song routes

module.exports = router;