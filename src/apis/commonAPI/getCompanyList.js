export default function getCompanyList() {
  let url = 'http://localhost:8080/common/comp';

  return fetch(url, { headers: { Accept: 'application/json' } });
}
