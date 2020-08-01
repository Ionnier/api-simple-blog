const express = require('express');
const Blog = require('../models/blogModel');
const blogController = require('../controllers/blogController');
const router = express.Router();

router
  .route('/')
  .get(blogController.getAllBlogs)
  .post(blogController.createBlog);

router
  .route('/:id')
  .delete(blogController.deleteBlog)
  .patch(blogController.updateBlog)
  .get(blogController.getOneBlog);

module.exports = router;
