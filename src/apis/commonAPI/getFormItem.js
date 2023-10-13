export default function getFormItem() {
  let url = `http://localhost:8080/manage/form/item/list`;
  return fetch(url, { headers: { Accept: 'application/json' } });
}
