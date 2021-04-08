const express = require('express');

const {
  getABlog, getAllBlog, updateBlog, addNewBlog,
} = require('../controllers/blog.js');

const router = express.Router();
//  getting all the blog posts for a specific band
//  posting a new blog post for a band
router.route('/:bandId')
  .get(getAllBlog)
  .post(addNewBlog);

//  getting a single blog post by post id
//  updating an existing blog post
router.route('/post/:id')
  .get(getABlog)
  .put(updateBlog);

module.exports = router;
