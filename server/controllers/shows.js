const { Show } = require('../models');

const logger = require('../../config/winston');

exports.getShows = (req, res, next) => Show.findAll({
  attributes: { exclude: ['BandId', 'createdAt', 'updatedAt'] },
})
  .then((result) => {
    if (result) {
      res.send(result);
    } else {
      res.status(404).send('Shows Not Found');
    }
    next();
  })
  .catch((err) => {
    logger.error(err);
    res.send(500);
    next(err);
  });

exports.getBandShows = (req, res, next) => {
  const { bandID } = req.params;
  return Show.findAll({
    attributes: { exclude: ['BandId', 'createdAt', 'updatedAt'] },
    where: {
      BandId: bandID,
    },
  })
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(404).send('Shows Not Found');
      }
      next();
    })
    .catch((err) => {
      logger.error(err);
      res.send(500);
      next(err);
    });
};

// Add a new Show for a band
exports.addShow = (req, res, next) => Show.create({
  name: req.body.name,
  bandName: req.body.bandName,
  displayName: req.body.displayName,
  showDate: req.body.showDate,
  latitude: req.body.latitude,
  longitude: req.body.longitude,
  city: req.body.city,
  state: req.body.state,
  country: req.body.country,
  BandId: req.body.bandID,
})
  .then((result) => {
    res.status(201).send(result);
    next();
  })
  .catch((err) => {
    logger.error(err);
    res.send(400);
    next(err);
  });
