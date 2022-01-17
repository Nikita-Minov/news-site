import User from '../models/User.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import postsService from './postsService.js';
dotenv.config();

class UserService {
  async getMe(user) {
    if (!user) {
      return {status: 200, message: 'You are not authorized!', user: null};
    }
    return {status: 200, message: 'User found!', user: {userId: user.userId,
      username: user.username}};
  }
  async createUser(username, password) {
    const userExists = await User.findOne({username});
    if (userExists) {
      return {status: 409, message: 'This user already exists!'};
    }
    await bcrypt.hash(password,
        +process.env.SALT_ROUNDS,
        function(err, hash) {
          if (err) {
            console.log(err);
            return {status: 500, message: 'Internal server error'};
          }
          const user = new User({username,
            password: hash,
            userId: Math.floor(Math.random() * 10000000),
            regDate: new Date()});
          user.save((err) => {
            if (err) {
              console.log(err);
              return {status: 500, message: 'Internal server error'};
            }
          });
        });
    return {status: 201, message: 'User registered successfully!'};
  }
  async changeMe({userId, password, email, username}) { // TODO: Redo function
    const userExists = await User.findOne({userId});
    if (!userExists) return {status: 404, message: 'User is not found!'};
    if (password) {
      bcrypt.hash(password,
          +process.env.SALT_ROUNDS,
          async function(err, hash) {
            if (err) return {status: 500, message: 'Internal server error'};
            await User.findOneAndUpdate(userId, {password: hash});
          });
    }
    if (email) await User.findOneAndUpdate(userId, {email});
    if (username) {
      await User.findOneAndUpdate(userId, {username});
      await postsService.changePost({creatorName: username});
    }
    return {status: 200, message: 'Data changed successfully!'};
  }
  async deleteUser(userId) {
    const userExists = await User.findOne({userId});
    if (!userExists) return {status: 404, message: 'User is not found!'};
    await User.findOneAndDelete({userId});
    return {status: 200, message: 'User deleted successfully!'};
  }
}

export default new UserService();
