const { Op } = require('sequelize');
const { Genre } = require('../models');
const logger = require('../../config/winston');

exports.getGenres = (req, res, next) => {
  const { page = 1, count = 5 } = req.query;

  return Genre.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    limit: Number(count),
    where: {
      id: {
        [Op.gt]: page - 1,
      },
    },
  }).then((results) => {
    if (!results.length) {
      res.status(404).send('No such genre');
    } else {
      res.send(results);
    }
    next();
  })
    .catch((err) => {
      logger.error(err);
      res.status(500).send('There was an error getting genres');
      next(err);
    });
};

exports.getOneGenre = (req, res, next) => {
  const { genreId } = req.params;

  return Genre.findOne({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    where: {
      id: genreId,
    },
  }).then((results) => {
    if (!results.length) {
      res.status(404).send('No such genre');
    } else {
      res.send(results);
    }
    next();
  })
    .catch((err) => {
      logger.error(err);
      res.status(500).send(`There was an error getting genre ${genreId}`);
      next(err);
    });
};
