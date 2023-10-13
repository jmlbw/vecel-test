export default function getDefaultApprovalLine(data) {
  let url = `http://localhost:8080/manage/form/detail/dal/${data}`;
  return fetch(url, { headers: { Accept: 'application/json' } });
}
