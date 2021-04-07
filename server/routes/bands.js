const express = require('express');
const logger = require('../../config/winston');
const { getBands, getOneBand } = require('../controllers/bands');

const router = express.Router();

router.get('/bands', getBands);

router.get('/bands/:id', getOneBand);

module.exports = router;
