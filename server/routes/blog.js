const express = require('express');

const { getABlog, getOther, getAllBlog } = requrie('../controllers/blog.js');

const router = express.Router();

router.get('/blogs', getAllBlog);

router.get('/blogs', getABlog);

router.get('/other', getOther);

module.exports = router;
