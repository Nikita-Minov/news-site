class AuthService {
  async login() {
    return {status: 200, message: 'You are logged in!'};
  }
  async logout() {
    return {status: 200, message: 'Successfully logged out!'};
  }
}

export default new AuthService();
