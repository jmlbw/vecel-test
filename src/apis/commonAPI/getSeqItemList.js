export default function getSeqItemList() {
  let url = 'http://localhost:8080/common/seq/item';

  return fetch(url, { headers: { Accept: 'application/json' } });
}
