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
    logger.info(`Get songs:, ${typeof results}`);
    logger.info(`Get songs - is it an array?:, ${Array.isArray(results)}`); // is an array
    res.send(results);
    next();
  })
    .catch((err) => {
      logger.error(err);
      res.status(500).send(`There was an error getting songs by ${bandId}`);
      next(err);
    });
};

// get individual song by artist
exports.getOneSong = (req, res, next) => {
  const { bandId, songId } = req.params;

  return Band.findOne({
    attributes: [['name', 'bandName']],
    where: {
      id: bandId,
    },
    include: {
      model: Song,
      attributes: ['title', 'album', 'track'],
      required: true,
      where: {
        id: songId,
      },
    },
  }).then((results) => {
    // if (!results.length) {
    //   res.status(404).send(`Could not find songId ${songId}`);
    // } else {
    //   res.send(results);
    // }
    logger.info(`Get One Songs:, ${typeof results}`);
    logger.info(`Get One songs - is it an array?: ${Array.isArray(results)}`);
    res.send(results);
    next();
  })
    .catch((err) => {
      logger.error(err);
      res.status(500).send(`There was an error fetching song ${songId}`);
      next(err);
    });
};

exports.addOneSong = (req, res, next) => {
  const {
    title,
    album,
    track,
    url,
   } = req.body;
  const { bandId } = req.params;
  return Song.create({
    title,
    album,
    track,
    bandId,
    url,
  }).then((results) => {
    logger.info(`Add one song:, ${typeof results}`);
    logger.info(`Add one song - is it an array?:, ${Array.isArray(results)}`);
    if (Object.keys(results)) {
      res.status(201).send(`Successfully added song ${title} to library`);
    } else {
      res.status(400).send(`Error adding song ${title} to library`);
    }
    next();
  })
    .catch((err) => {
      logger.error(err);
      res.status(500).send(`Error adding song ${title} to library`);
      next(err);
    });
};
