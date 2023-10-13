import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getTreeView = () => {
  return api.get('/orgTreeView');
};
