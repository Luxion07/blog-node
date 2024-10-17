import Post, { IPost } from '../models/post.model';
import ApiError from '../utils/ApiError';
import httpStatus from 'http-status';

const queryPosts = async (): Promise<IPost[]> => {
  const posts = await Post.find({}) as IPost[];
  return posts;
};

const queryPostById = async (id: number): Promise<IPost | null> => {
  const post = await Post.findOne({ postId: id }) as IPost;
  return post;
};

const createPost = async (postBody: IPost): Promise<IPost> => {
  const post = await Post.create(postBody) as IPost;
  return post;
}

const updatePost = async (postId: number, postBody: Partial<IPost>): Promise<IPost| null> => {
  const post = await Post.findOne({ postId: postId });
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  Object.assign(post, postBody);
  await post.save();
  return post as IPost;
}

const deletePost = async (postId: number): Promise<IPost| null> => {
  const post = await Post.findOne({ postId: postId });
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  await post.delete();
  return post as IPost;
};

export { queryPosts, queryPostById, createPost, updatePost, deletePost };