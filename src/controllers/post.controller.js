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
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  res.send(post);
});

const createPost = catchAsync(async (req, res) => {
  const post = await postService.createPost(req.body);
  res.status(httpStatus.CREATED).send(post);
});

const updatePost = catchAsync(async (req, res) => {
  const post = await postService.updatePost(req.params.postId, req.body);
  res.send(post);
});

module.exports = { getAllPosts, getPostById, createPost, updatePost }