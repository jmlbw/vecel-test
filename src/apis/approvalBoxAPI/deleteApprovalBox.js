import axios from 'axios';

export default function deleteApprovalBox(boxId) {
  const url = `http://localhost:8080/approvbox/box/delete?boxId=${boxId}`;
  return axios.put(url);
}
