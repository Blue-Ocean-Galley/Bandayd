const { Band } = require('../models');
const logger = require('../../config/winston');

exports.addUser = (req, res, next) => Band.create({
  name: req.body.name,
  email: req.body.email,
  description: req.body.description,
  genreId: req.body.genreId,
  password: req.body.password,
})
  .catch((err) => {
    logger.error(err);
    // if a particular error type is thrown - send a message to the client
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(400).send(`Sorry the email ${req.body.email} is already being used for another band`);
    } else {
      res.status(500).send('The server encountered an error');
    }
    next(err);
  })
  .then(() => {
    // else create the new user
    res.status(201).send(`Successfully created new band ${req.body.name}`);
    next();
  });
