const express = require('express');
const postController = require('../../controllers/post.controller');
const router = express.Router();

router.get('/', postController.getAllPosts)
router.get('/:postId', postController.getPostById)
router.post('/create', postController.createPost)
router.put('/update/:postId', postController.updatePost)
router.delete('/:postId', postController.deletePost)

module.exports = router;