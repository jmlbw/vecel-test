export default function getFormDetail(data) {
  let url = `http://localhost:8080/manage/form/detail/${data}`;
  return fetch(url, { headers: { Accept: 'application/json' } });
}
