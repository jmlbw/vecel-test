import axios from 'axios';

export default function updateApprovalBox(approvalBoxState) {
  const url = `http://localhost:8080/approvbox/update`;
  const payload = {
    ...approvalBoxState,
  };

  return axios.put(url, payload);
}
