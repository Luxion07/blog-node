const express = require('express');
const blogController = require('../../controllers/blog.controller');
const router = express.Router();

router.get('/', blogController.getAllPosts);

module.exports = router;