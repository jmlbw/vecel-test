export default function getSeqDetail(data) {
  let url = `http://localhost:8080/manage/seq/detail/${data}`;
  return fetch(url, { headers: { Accept: 'application/json' } });
}
