import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

export const postLogin = (loginId, password) => {
  return api.post('/login', {
    loginId,
    password,
  });
};
