import userService from '../services/UserService.js';
import dotenv from 'dotenv';
dotenv.config();

class UsersController {
  async getMe(req, res) {
    try {
      const result = await userService.getMe(req.user);
      res.status(result.status).json({message: result.message,
        user: {username: result.username, userId: result.userId}});
    } catch (err) {
      console.log(err);
    }
  }
  async createUser(req, res) {
    try {
      const result = await userService.createUser(req.body.username,
          req.body.password);
      res.status(result.status).json({message: result.message});
    } catch (err) {
      console.log(err);
    }
  }
  async changeMe(req, res) {
    try {
      const result = await userService.changeMe(req.body.userId,
          req.body.password, req.body.email, req.body.username);
      res.status(result.status).json({message: result.message});
    } catch (err) {
      console.log(err);
    }
  }
  async deleteUser(req, res) {
    try {
      const result = await userService.deleteUser(req.user.userId);
      res.status(result.status).json({message: result.message});
    } catch (err) {
      console.log(err);
    }
  }
}

export default new UsersController();
