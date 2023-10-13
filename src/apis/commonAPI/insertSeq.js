export default function insertSeq(data) {
  let url = 'http://localhost:8080/manage/seq/detail';
  const jsonData = JSON.stringify(data);

  console.log(data);
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: jsonData,
  });
}
