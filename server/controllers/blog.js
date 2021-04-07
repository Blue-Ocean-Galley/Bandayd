const { Blog } = require('../models');
const logger = require('../../config/winston');

//  getting all the blog post

exports.getAllBlog = (req, res, next) => {
  const bandID = req.params.bandId;
  return Blog.findAll({
    where: {
      bandId: bandID,
    },
  })
    .then((result) => {
      res.send(result);
      next();
    })
    .catch((err) => {
      logger.error(err);
      res.send(500);
      next(err);
    });
};
//  getting a single blog post

exports.getABlog = (req, res, next) => {
  const blogID = req.params.id;
  return Blog.findAll({
    where: {
      id: blogID,
    },
  })
    .then((result) => {
      res.send(result);
      next();
    })
    .catch((err) => {
      logger.error(err);
      res.send(500);
      next(err);
    });
};

// updating the blog post of a specific user

exports.updateBlog = (req, res, next) => {
  const bandID = req.params.id;
  const updatePost = req.body.post;
  return Blog.update({ post: updatePost }, {
    where: {
      bandId: bandID,
    },
  })
    .then(() => {
      res.status(201).send('Successfully Added');
      next();
    })
    .catch((err) => {
      logger.error(err);
      res.send(400);
      next(err);
    });
};

// add a new blog post from the specific user

exports.addNewBlog = (req, res, next) => Blog.create({
  name: req.body.name,
  description: req.body.description,
  post: req.body.post,
  bandId: req.body.bandId,
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
