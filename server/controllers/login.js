const { Band } = require('../models');
const logger = require('../../config/winston');

exports.login = (req, res, next) => Band.findOne({
  attributes: ['id'],
  where: {
    email: req.body.email,
    password: req.body.password,
  },
})
  .then(() => {
  // else create the new user
    res.status(201).send(`Successfully created new band ${req.body.name}`);
    next();
  })
  .then((data) => {
  // console.log(data);
    if (!data) {
      res.status(401).send('Error with email/password');
    } else {
      res.status(200).send(data);
    }
    next();
  })
  .catch((err) => {
    logger.error(err);
    res.status(500).send('Unable to login');
    next(err);
  });
