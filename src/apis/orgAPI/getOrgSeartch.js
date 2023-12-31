import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getOrgSeartch = (category, search) => {
  return api.get(`/orgsearch`, {
    params: {
      category: category,
      search: search,
    },
  });
};
