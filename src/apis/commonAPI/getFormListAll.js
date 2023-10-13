export default function getFormListAll() {
  let url = `http://localhost:8080/manage/form/list/all`;
  return fetch(url, { headers: { Accept: 'application/json' } });
}
