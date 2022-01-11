import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  userId: Number,
  password: String,
  regDate: Date,
  email: String,
});

export default mongoose.model('User', userSchema);
