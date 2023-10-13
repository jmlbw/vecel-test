export default function updateForm(data) {
  let url = 'http://localhost:8080/manage/form/detail';
  // let sample = [
  //   {
  //     compId: 1,
  //     compName: 'Company A',
  //     deptId: 1,
  //     deptName: 'HR Department',
  //     userId: 1,
  //     lineOrder: 2,
  //   },
  // ];
  // data = { ...data, approvalLine: sample };

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
