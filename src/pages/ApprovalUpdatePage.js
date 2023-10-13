import React, { useEffect, useState, useRef } from 'react';
import InnerBox from '../components/common/InnerBox';
import UpdateForm from '../components/approvalManage/approvalUpdate/UpdateForm';
import Button from '../components/common/Button';
import { useLocation } from 'react-router-dom';

export default function ApprovalUpdatePage(props) {
  const location = useLocation();
  const [drafting_time, setDraftingTime] = useState('');
  const [sequence_code, setSequenceCode] = useState('');
  const [enforce_date, setEnforceDate] = useState('');
  const [formData, setFormData] = useState(null);
  const [editor, setEditor] = useState(null);
  const divRef = useRef(null);
  const titleRef = useRef(null);

  const handleSelectTimeChange = (newValue) => {
    setDraftingTime(newValue);
  };
  const handleSelectBoxChange = (newValue) => {
    setSequenceCode(newValue);
  };
  const dataHandler = (data) => {
    setFormData(data);
  };

  const editorHandler = (ref) => {
    setEditor(ref.currentContent);
  };

  const handleClick = () => {
    const data = {
      approvalDocTitle: titleRef.current.innerHTML,
      seqCode: sequence_code,
      receiveRefList: [3],
      createdAt: drafting_time,
      enforcementDate: enforce_date,
      contents: editor,
    };

    fetch(`http://localhost:8080/approve/${location.search.split('=')[1]}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status == '200') {
          alert('문서가 수정되었습니다.');
        } else {
          alert('문서수정을 실패했습니다.');
        }
      })
      .catch((e) => {
        console.log(e);
        alert('문서수정을 실패했습니다.');
      });
  };

  return (
    <div>
      <div>
        <InnerBox
          text={'결재문서수정페이지'}
          width={'100%'}
          height={'100%'}
          children={
            <>
              <UpdateForm
                approval_doc_id={location.search.split('=')[1]}
                handleSelectTimeChange={handleSelectTimeChange}
                handleSelectBoxChange={handleSelectBoxChange}
                dataHandler={dataHandler}
                editorHandler={editorHandler}
                titleRef={titleRef}
              />
              <Button
                label={'수정'}
                btnStyle={'blue_btn'}
                onClick={handleClick}
              />
            </>
          }
        ></InnerBox>
      </div>
    </div>
  );
}
