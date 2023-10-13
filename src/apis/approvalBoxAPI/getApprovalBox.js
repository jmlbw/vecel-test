export default function getDocBoxList(company) {
  let url = `http://localhost:8080/approvbox/list?company=${company}`;

  return fetch(url, { headers: { Accept: 'application/json' } });
}
