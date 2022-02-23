import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  commentText: {type: String, required: true},
  postId: {type: Number, required: true},
  createDate: Date,
  creatorId: {type: Number, required: true},
  creatorName: {type: String, required: true},
});

export default mongoose.model('Post', commentSchema);
