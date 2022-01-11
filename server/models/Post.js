import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  postTitle: {type: String, required: true},
  postText: {type: String, required: true},
  postId: {type: Number, required: true},
  createDate: Date,
  creatorId: {type: Number, required: true},
  creatorName: {type: String, required: true},
});

export default mongoose.model('Post', postSchema);
