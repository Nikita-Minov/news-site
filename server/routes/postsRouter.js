import express from 'express';
import postsController from '../controllers/postsController.js';
const router = new express.Router();
router.route('/posts')
    .get(postsController.getPosts)
    .post(postsController.createPost)
    .put(postsController.changePost)
    .delete(postsController.deletePost);
router.post('/post', postsController.getPost);
router.route('/comments');


export default router;
