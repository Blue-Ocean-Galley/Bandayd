const { Op } = require('sequelize');
const { Band, Genre } = require('../models');
const logger = require('../../config/winston');

exports.getBands = (req, res, next) => {
  const page = req.query.page || 1;
  const count = req.query.count || 5;

  return Band.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt', 'GenreId', 'password'] },
    limit: Number(count),
    where: {
      id: {
        [Op.gt]: page - 1,
      },
    },
  }).then((results) => {
    if (!results.length) {
      res.status(404).send(`No results bands after page ${page} and count ${count}`);
    } else {
      res.send(results);
    }
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
    attributes: { exclude: ['createdAt', 'updatedAt', 'GenreId', 'password'] },
    where: {
      id: bandId,
    },
    include: {
      model: Genre,
      required: true,
      attributes: { exclude: ['createdAt', 'updatedAt', 'id'] },
    },
  }).then((results) => {
    if (!results.length) {
      res.status(404).send(`No results for bandId ${bandId}`);
    } else {
      res.send(results);
    }
    next();
  })
    .catch((err) => {
      logger.error(err);
      res.status(500).send(`There was an error getting information on band ${bandId}: ${err}`);
      next(err);
    });
};

exports.updateProfilePicture = (req, res, next) => {
  const { photoUrl, bandId } = req.body;
  return Band.update({
    profilePhotoUrl: photoUrl,
  }, {
    where: {
      id: bandId,
    },
  })
    .then(() => {
      res.status(201).send('Successfully Updated');
      next();
    })
    .catch((err) => {
      logger.error(err);
      res.send(400);
      next(err);
    });
};

exports.updateBio = (req, res, next) => {
  const { bio, bandId } = req.body;
  return Band.update({
    description: bio,
  }, {
    where: {
      id: bandId,
    },
  })
    .then(() => {
      res.status(201).send('Successfully Updated');
      next();
    })
    .catch((err) => {
      logger.error(err);
      res.send(400);
      next(err);
    });
};
