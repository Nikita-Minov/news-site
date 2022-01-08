import authService from '../services/AuthService.js';

class AuthController {
  async login(req, res) {
    try {
      const result = await authService.login();
      res.status(result.status).json({message: result.message});
    } catch (err) {
      console.log(err);
    }
  }
  async logout(req, res) {
    try {
      const result = await authService.logout();
      req.logout();
      res.status(result.status).json({message: result.message});
    } catch (err) {
      console.log(err);
    }
  }
}

export default new AuthController();
