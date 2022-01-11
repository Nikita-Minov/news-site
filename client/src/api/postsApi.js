import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api/v1/',
  withCredentials: true,
});

export const postsAPI = {
  getPosts() {
    return instance
        .get('/posts')
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
  },
};
