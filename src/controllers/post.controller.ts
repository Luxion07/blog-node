import { Request, Response } from 'express';
import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import * as postService from '../services/post.service';

const getAllPosts = catchAsync(async (req: Request, res: Response): Promise<void> => {
  const result = await postService.queryPosts();
  res.send(result);
});

const getPostById = catchAsync(async (req: Request, res: Response): Promise<void> => {
  const postId = parseInt(req.params.postId, 10);
  if (isNaN(postId)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid post ID');
  }
  const post = await postService.queryPostById(postId);
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  res.send(post);
});

const createPost = catchAsync(async (req: Request, res: Response): Promise<void> => {
  const post = await postService.createPost(req.body);
  res.status(httpStatus.CREATED).send(post);
});

const updatePost = catchAsync(async (req: Request, res: Response): Promise<void> => {
  const postId = parseInt(req.params.postId, 10);
  if (isNaN(postId)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid post ID');
  }
  const post = await postService.updatePost(postId, req.body); if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  res.send(post);
});

const deletePost = catchAsync(async (req: Request, res: Response): Promise<void> => {
  const postId = parseInt(req.params.postId, 10);
  if (isNaN(postId)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid post ID');
  }
  await postService.deletePost(postId); res.status(httpStatus.NO_CONTENT).send();
});

const postController = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};

export default postController;