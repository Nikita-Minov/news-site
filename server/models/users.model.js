const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  userId: Number,
  password: String,
  regDate: Date,
  email: String
})

module.exports = mongoose.model('User', userSchema);