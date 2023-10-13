export default function insertForm(data) {
  let url = 'http://localhost:8080/manage/form/detail';
  const jsonData = JSON.stringify(data);

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: jsonData,
  });
}
