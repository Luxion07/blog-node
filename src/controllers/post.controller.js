const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { postService } = require('../services');

const getAllPosts = catchAsync(async (req, res) => {
  const result = await postService.queryPosts();
  res.send(result);
});

const getPostById = catchAsync(async (req, res) => {
  const post = await postService.queryPostById(req.params.postId);
  if(!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  res.send(post);
});

module.exports = {getAllPosts, getPostById}