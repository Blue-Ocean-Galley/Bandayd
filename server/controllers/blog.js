const { Op } = require('sequelize')
const { Blog } = require('../models')

exports.getAllBlog(req, res, next) => {
  const count = 10;
  return Blog.findAll({
    limit: count
  })
  .then((result) => {
    res.send(result);
    next();
  })
  .catch((err) => {
    res.send(500);
    next(err);
  })
}

exports.getABlog(req, res, next) => {
  const blogID = req.params.id
  return Blog.findAll({
    where: {
      id: blogID
    }
  })
  .then((result) => {
   res.send(result);
   next();
  })
  .catch((err) => {
    res.send(500);
    next(err);
  })
}