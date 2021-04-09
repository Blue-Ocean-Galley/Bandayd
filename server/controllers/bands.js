const { Op } = require('sequelize');
const { Band, Genre } = require('../models');
const logger = require('../../config/winston');

exports.getBands = (req, res, next) => {
  const page = req.query.page || 1;
  const count = req.query.count || 5;

  return Band.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt', 'GenreId'] },
    limit: Number(count),
    where: {
      id: {
        [Op.gt]: page - 1,
      },
    },
  }).then((results) => {
    res.send(results);
    next();
  })
    .catch((err) => {
      logger.error(err);
      res.status(500).send(`Error fetching bands ${err}`);
      next(err);
    });
};

exports.getOneBand = (req, res, next) => {
  const bandId = req.params.id;

  return Band.findOne({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    where: {
      id: bandId,
    },
    include: {
      model: Genre,
      required: true,
      attributes: { exclude: ['createdAt', 'updatedAt', 'id'] },
    },
  }).then((results) => {
    res.send(results);
    next();
  })
    .catch((err) => {
      logger.error(err);
      res.status(500).send(`There was an error getting information on band ${bandId}: ${err}`);
      next(err);
    });
};

exports.editBandBio = (req, res, next) => {
  const { bio } = req.body;
  const { id } = req.params;
  return Band.update({
    description: bio,
  }, {
    where: {
      id,
    },
    returning: true,
  }).then(function(result) {
    logger.info(result);
    res.status(201).send(result);
    next();
  })
    .catch((err) => {
      logger.error(err);
      res.status(500).send(`Error updating bio for ${req.params.id}`);
      next(err);
    });
};
