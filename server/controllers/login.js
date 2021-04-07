const { Band } = require('../models');
const logger = require('../../config/winston');

exports.addUser = (req, res, next) => {
  // aside - create a migration to set email as unique value
  return Band.create({
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
    genreId: req.body.genreId,
  })
    .catch((err) => {
      logger.error(err);
      if (err instanceof SequelizeUniqueConstraintError) {
        res.status(400).send(`Sorry the email ${req.body.email} is already being used for another band`);
      }
      next(err);
    })
    .then(() => {
      res.status(201).send(`Successfully created new band ${name}`);
      next();
    });
  // if a particular error type is thrown - send a message to the client
  // else create the new user
};