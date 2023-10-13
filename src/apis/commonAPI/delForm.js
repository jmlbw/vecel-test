export default function delForm(data) {
  let url = `http://localhost:8080/manage/form/${data}`;

  return fetch(url, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}
