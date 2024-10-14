import { Request, Response } from 'express';
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { postService } = require('../services');

const getAllPosts = catchAsync(async (req: Request, res: Response): Promise<void> => {
  const result = await postService.queryPosts();
  res.send(result);
});

const getPostById = catchAsync(async (req: Request, res: Response): Promise<void> => {
  const post = await postService.queryPostById(req.params.postId);
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
  const post = await postService.updatePost(req.params.postId, req.body);
  res.send(post);
});

const deletePost = catchAsync(async (req: Request, res: Response): Promise<void> => {
  await postService.deletePost(req.params.postId);
  res.status(httpStatus.NO_CONTENT).send();
});

export { getAllPosts, getPostById, createPost, updatePost, deletePost }