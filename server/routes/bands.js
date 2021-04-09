const express = require('express');
// const logger = require('../../config/winston');
const { getBands, getOneBand, updateProfilePicture } = require('../controllers/bands');

const router = express.Router();

// takes page and count as query params - defaults to page=1 count=5
router.get('/', getBands);
// return bandId as req.params
router.get('/:id', getOneBand);
// update profile picture
router.put('/photo/:id', updateProfilePicture);

module.exports = router;
