export default function getApprovalBoxList() {
  let url = `http://localhost:8080/approvbox/boxlist`;

  return fetch(url, {
    headers: { Accept: 'application/json' },
    credentials: 'include',
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  });
}
