const express = require('express');

const {
  getABlog, getAllBlog, updateBlog, addNewBlog,
} = require('../controllers/blog.js');

const router = express.Router();
//  getting all the blog posts for a specific band
router.get('/:bandId', getAllBlog);

//  getting a single blog post by post id
router.get('/post/:id', getABlog);

//  posting a new blog post for a band
router.post('/:bandId', addNewBlog);

//  updating an existing blog post
router.put('/post/:id', updateBlog);

module.exports = router;
