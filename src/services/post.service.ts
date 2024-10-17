import Post from '../models/post.model';
import ApiError from '../utils/ApiError';
import httpStatus from 'http-status';

const queryPosts = async () => {
  const posts = await Post.find({});
  return posts;
};

const queryPostById = async (id: number) => {
  const post = await Post.findOne({ postId: id })
  return post;
};

const createPost = async (postBody: any) => {
  const post = await Post.create(postBody);
  return post;
}

const updatePost = async (postId: number, postBody: any) => {
  const post = await Post.findOne({ postId: postId });
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  Object.assign(post, postBody);
  await post.save();
  return post;
}

const deletePost = async (postId: number) => {
  const post = await Post.findOne({ postId: postId });
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  await post.delete();
  return post;
};

export { queryPosts, queryPostById, createPost, updatePost, deletePost };