import Post from '../models/Post.js';
import User from '../models/User.js';

class PostsService {
  async createPost(postTitle, postText, creatorId) {
    const user = await User.findOne({userId: creatorId});
    const post = await new Post({postTitle,
      postText,
      creatorId,
      postId: Math.floor(Math.random() * 10000000),
      createDate: new Date(),
      creatorName: user.username});
    console.log(post);
    await post.save((err) => {
      if (err) {
        console.log(err);
      }
    });
    return {status: 200, message: 'News created successfully!'};
  }
  async getPosts() {
    let posts = await Post.find();
    if (posts.length > 10) posts = posts.slice(0, 10);
    return {status: 200, message: 'News received successfully!', posts};
  }
  async changePost({postTitle, postText, postId, creatorName}) {
    if (postTitle) await Post.findOneAndUpdate(postId, {postTitle});
    if (postText) await Post.findOneAndUpdate(postId, {postText});
    if (creatorName) await Post.findOneAndUpdate(postId, {creatorName});
    return {status: 200, message: 'News changed successfully!'};
  }
  async deletePost(postId) {
    const postExists = await Post.findOne({postId});
    if (!postExists) return {status: 404, message: 'News is not found!'};
    await Post.findOneAndDelete({postId});
    return {status: 200, message: 'The news has been successfully deleted!'};
  }
  async getPost({postId}) {
    const post = await Post.findOne({postId});
    return {status: 200, message: 'News received successfully!', post};
  }
}

export default new PostsService();
