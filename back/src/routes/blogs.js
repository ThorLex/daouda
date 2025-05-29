const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/auth');
const upload = require('../middlewares/upload');
const blogController = require('../controllers/blogController');

// Public
router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);

// Protected (admin)
router.post('/', authenticate, upload.single('image'), blogController.createBlog);
router.put('/:id', authenticate, upload.single('image'), blogController.updateBlog);
router.delete('/:id', authenticate, blogController.deleteBlog);

module.exports = router;
