import { Router } from 'express';
import postController from '../../controllers/post.controller';

const router = Router();

router.get('/', postController.getAllPosts);
router.get('/:postId', postController.getPostById);
router.post('/create', postController.createPost);
router.put('/update/:postId', postController.updatePost);
router.delete('/:postId', postController.deletePost);

export default router;