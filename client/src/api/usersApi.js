import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api/v1/',
  withCredentials: true,
});

export const usersAPI = {
  createAccount(username, password) {
    console.log(username + password);
    return instance
        .post('/users', {username, password})
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
  },
  login(username, password) {
    return instance
        .post('/auth', {username, password})
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
  },
  getMe() {
    return instance
        .get('/users')
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
  },
  logout() {
    return instance
        .delete('/auth')
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
  },
};
