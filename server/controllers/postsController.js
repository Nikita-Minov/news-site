import postsService from '../services/postsService.js';

class PostsController {
  async createPost(req, res) {
    try {
      const result = await postsService.createPost(req.body.postTitle,
          req.body.postText,
          req.body.creatorId);
      res.status(result.status).json({message: result.message});
    } catch (err) {
      console.log(err);
    }
  }
  async getPosts(req, res) {
    try {
      const result = await postsService.getPosts();
      res.status(result.status).json({message: result.message,
        posts: result.posts});
    } catch (err) {
      console.log(err);
    }
  }
  async changePost(req, res) { // TODO: Remake
    try {
      const result = await postsService.changePost(req.body.postTitle,
          req.body.postText,
          req.body.postId);
      res.status(result.status).json({message: result.message});
    } catch (err) {
      console.log(err);
    }
  }
  async deletePost(req, res) {
    try {
      const result = await postsService.deletePost(req.body.postId);
      res.status(result.status).json({message: result.message});
    } catch (err) {
      console.log(err);
    }
  }
}

export default new PostsController();
