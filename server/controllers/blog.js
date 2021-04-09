const { Blog } = require('../models');
const logger = require('../../config/winston');

//  getting all the blog post

exports.getAllBlog = (req, res, next) => {
  const bandID = req.params.bandId;
  return Blog.findAll({
    attributes: { exclude: ['BandId', 'createdAt', 'updatedAt'] },
    where: {
      bandId: bandID,
    },
  })
    .then((results) => {
      if (!results.length) {
        res.status(404).send(`No blog posts for bandId ${bandID}`);
      } else {
        res.send(results);
      }
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
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    where: {
      id: blogID,
    },
  })
    .then((results) => {
      if (!results.length) {
        res.status(404).send(`No posts with id ${blogID}`);
      } else {
        res.send(results);
      }
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
  const postID = req.params.id;
  // const updatePost = req.body.post;
  return Blog.update({
    name: req.body.name,
    description: req.body.description,
    post: req.body.post,
    bandId: req.body.bandId,
  }, {
    where: {
      id: postID,
    },
  })
    .then((results) => {
      if (!results.length) {
        res.status(400).send(`Bad request to update post ${postID}`);
      } else {
        res.status(201).send('Successfully Updated');
      }
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
  bandId: req.params.bandId,
})
  .then((results) => {
    if (!results.length) {
      res.status(400).send(`Bad request to add post for bandId ${req.params.bandId}`);
    } else {
      res.status(201).send('Successfully added new blog post');
    };
    next();
  })
  .catch((err) => {
    logger.error(err);
    res.send(400);
    next(err);
  });
