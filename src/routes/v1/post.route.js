const express = require('express');
const postController = require('../../controllers/post.controller');
const router = express.Router();

router.get('/', postController.getAllPosts)
router.get('/:postId', postController.getPostById)

module.exports = router;