const { Band } = require('../models');
const logger = require('../../config/winston');

exports.login = (req, res, next) => Band.findOne({
  attributes: ['id'],
  where: {
    email: req.body.email,
    password: req.body.password,
  },
})
  .catch((err) => {
    logger.error(err);
    res.status(500).send('Unable to login');
    next(err);
  })
  .then((data) => {
    console.log(data.data.id);
    res.status(200).send(data);
    next();
  });
