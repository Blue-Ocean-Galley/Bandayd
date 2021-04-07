const { Op } = require('sequelize');
const { Blog } = require('../models');

//  getting all the blog post limited to first 10

exports.getAllBlog = (req, res, next) => Blog.findAll()
  .then((result) => {
    res.send(result);
    next();
  })
  .catch((err) => {
    res.send(500);
    next(err);
  });

//  getting a single blog post

exports.getABlog = (req, res, next) => {
  const bandID = req.params.id;
  return Blog.findAll({
    where: {
      id: bandID,
    },
  })
    .then((result) => {
      res.send(result);
      next();
    })
    .catch((err) => {
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
      id: bandID,
    },
  })
    .then(() => {
      res.status(200).send('Successfully Added');
      next();
    })
    .catch((err) => {
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
  .then(() => {
    res.status(200).send('Successfully Added a Blog post');
    next();
  })
  .catch((err) => {
    res.send(400);
    next(err);
  });
