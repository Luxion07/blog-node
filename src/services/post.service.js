const { Post } = require('../models');

const queryPosts = async () => {
  const posts = await Post.find({});
  return posts;
};

const queryPostById = async (id) => {
  const post = await Post.findOne({postId: id})
  return post;
};

const createPost = async (postBody) => {
  const post = await Post.create(postBody);
  return post;
}

module.exports = { queryPosts, queryPostById, createPost };