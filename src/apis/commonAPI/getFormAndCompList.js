export default function getFormAndCompList(data) {
  let url = 'http://localhost:8080/manage/form/list';

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
