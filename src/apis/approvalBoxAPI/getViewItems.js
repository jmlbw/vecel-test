import axios from 'axios';

export default function getViewItems(boxId) {
  const url = `http://localhost:8080/approvbox/box/detail/viewitem?boxId=${boxId}`;
  return axios.get(url);
}
