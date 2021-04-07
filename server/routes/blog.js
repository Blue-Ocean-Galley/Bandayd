const express = require('express');

const { getABlog, getAllBlog, updateBlog, addNewBlog } = requrie('../controllers/blog.js');

const router = express.Router();
//  getting all the blogs
router.get('/blogs', getAllBlog);

//  getting a single blog
router.get('/blogs', getABlog);

//  posting a new blog
router.post('/blogs', addNewBlog);

//  updating an existing blog
router.put('/blogs', updateBlog);

module.exports = router;
