const { Op } = require('sequelize');
const { Band, Song } = require('../models');
const logger = require('../../config/winston');

// get all songs by artist
exports.getSongs = (req, res, next) => {
  const { bandId } = req.params;

  return Band.findAll({
    attributes: ['name'],
    where: {
      id: bandId,
    },
    include: {
      model: Song,
      required: true,
      attributes: { exclude: ['createdAt', 'updatedAt', 'id'] },
    },
  }).then((results) => {
    res.send(results);
    next();
  })
    .catch((err) => {
      logger.error(err);
      res.status(500).send(`There was an error getting songs by ${bandId}`);
      next(err);
    });
}

// get individual song by artist
