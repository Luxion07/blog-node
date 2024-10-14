const catchAsync = require('../utils/catchAsync');
const { postService } = require('../services');

const getAllPosts = catchAsync(async (req, res) => {
  const result = await postService.queryPosts();
  res.send(result);
});

const getPostById = catchAsync(async (req, res) => {
  const post = await postService.queryPostById(req.params.postId);
  res.send(post);
});

module.exports = {getAllPosts, getPostById}