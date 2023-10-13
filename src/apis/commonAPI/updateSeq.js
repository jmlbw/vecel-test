export default function updateSeq(data) {
  let url = 'http://localhost:8080/manage/seq/detail';

  const jsonData = JSON.stringify(data);

  return fetch(url, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: jsonData,
  });
}
