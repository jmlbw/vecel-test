import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getGridView = (selectedNode, view, isChecked) => {
  return api.get(`/topGridView/${selectedNode}`, {
    params: {
      type: view,
      isChecked: isChecked,
    },
  });
};
