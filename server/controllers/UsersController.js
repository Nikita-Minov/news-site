import userService from '../services/userService.js';
import dotenv from 'dotenv';
dotenv.config();

class UsersController {
  async getMe(req, res) {
    try {
      const result = await userService.getMe(req.user);
      res.status(result.status).json({message: result.message,
        user: result.user});
    } catch (err) {
      console.log(err);
    }
  }
  async createUser(req, res) {
    try {
      console.log(req.body.username + req.body.password)
      const result = await userService.createUser(req.body.username,
          req.body.password);
      res.status(result.status).json({message: result.message});
    } catch (err) {
      console.log(err);
    }
  }
  async changeMe(req, res) {
    try {
      const result = await userService.changeMe({userId: req.body.userId,
        password: req.body.password,
        email: req.body.email, username: req.body.username});
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
