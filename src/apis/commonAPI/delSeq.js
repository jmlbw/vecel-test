export default function delSeq(data) {
  let url = `http://localhost:8080/manage/seq/${data}`;

  return fetch(url, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}
