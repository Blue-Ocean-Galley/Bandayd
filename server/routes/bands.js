const express = require('express');
const logger = require('../../config/winston');
const { getBands, getOneBand } = require('../controllers/bands');

const router = express.Router();

router.get('/', getBands);

router.get('/:id', getOneBand);

module.exports = router;
