const { Post } = require('../models');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const queryPosts = async () => {
  const posts = await Post.find({});
  return posts;
};

const queryPostById = async (id) => {
  const post = await Post.findOne({ postId: id })
  return post;
};

const createPost = async (postBody) => {
  const post = await Post.create(postBody);
  return post;
}

const updatePost = async (postId, postBody) => {
  const post = await Post.findOne({ postId: postId });
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  Object.assign(post, postBody);
  await post.save();
  return post;
}

const deletePost = async (postId) => {
  const post = await Post.findOne({ postId: postId });
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  await post.delete();
  return post;
};

module.exports = { queryPosts, queryPostById, createPost, updatePost, deletePost };
