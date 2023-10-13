import React, { useRef, useState } from 'react';
import styled from '../../../styles/components/approvalManage/formList/SmallBox.module.css';
import ApprovalForm from '../approvalRegist/ApprovalForm';
import PopUp from '../../common/PopUp';
import PopUpFoot from '../../common/PopUpFoot';
import moment from 'moment';

export default function SmallBox(props) {
  const innerBoxStyle = {
    width: props.width,
    height: props.height,
  };

  const [formData, setFormData] = useState(null);
  const [editor, setEditor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [main_form, setMainForm] = useState('');
  const [sequence_code, setSequenceCode] = useState('');
  const [drafting_time, setDraftingTime] = useState(moment());
  const [enforce_date, setEnforceDate] = useState(moment());
  const [userId, setUserId] = useState(1);
  const [deptId, setDeptId] = useState(1);
  const divRef = useRef(null);
  const titleRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const dataHandler = (data) => {
    setFormData(data);
  };

  const editorHandler = (ref) => {
    setEditor(ref.currentContent);
  };

  const handleSelectBoxChange = (newValue) => {
    setSequenceCode(newValue);
  };
  const handleSelectTimeChange = (newValue) => {
    setDraftingTime(newValue);
  };
  const handleEnforceDateChange = (newValue) => {
    setEnforceDate(newValue);
  };

  // const extractTableData = () => {
  //   const table = document.querySelector('table');
  //   const rows = table.querySelectorAll('tr');
  //   const data = {};

  //   rows.forEach((row) => {
  //     const cells = row.querySelectorAll('td');
  //     if (cells.length === 2) {
  //       const key = cells[0].textContent.trim();
  //       const value = cells[1].textContent.trim();
  //       data[key] = value;
  //     }
  //   });
  //   return data;
  // };

  const handleClick = (state) => {
    let docStatus = 'T';
    if (state === 'regist') {
      docStatus = 'W';
    }
    // let searchContents = extractTableData(editor);
    // console.log(searchContents);
    const data = {
      userId: userId,
      deptId: deptId,
      formCode: props.form_code,
      approvalDocTitle: titleRef.current.innerHTML,
      docStatus: docStatus,
      seqCode: sequence_code,
      approverList: [1, 2, 3],
      receiveRefList: [3],
      createdAt: drafting_time,
      enforcementDate: enforce_date,
      contents: editor,
    };

    fetch(`http://localhost:8080/approve/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status == '200') {
        alert('상신되었습니다.');
        closeModal();
      }
    });
  };

  const BlueAndGrayBtn = [
    {
      label: '상신',
      onClick: () => {
        handleClick('regist');
      },
      btnStyle: 'popup_blue_btn',
    },
    {
      label: '임시저장',
      onClick: () => {
        handleClick('temporal');
      },
      btnStyle: 'popup_gray_btn',
    },
    {
      label: '취소',
      onClick: () => {
        closeModal();
      },
      btnStyle: 'popup_gray_btn',
    },
  ];

  return (
    <>
      <PopUp
        label={
          <div>
            <div className={styled.box} style={innerBoxStyle}>
              <div className={styled.title}>{props.form_name}</div>
              <div className={styled.content}>{props.form_explain}</div>
            </div>
          </div>
        }
        btnStyle={'popup_non_btn'}
        width="1300px"
        height="600px"
        title="결재작성상세"
        children={
          <>
            <ApprovalForm
              form_code={props.form_code}
              main_form={main_form}
              setMainForm={setMainForm}
              divRef={divRef}
              userId={userId}
              deptId={deptId}
              titleRef={titleRef}
              dataHandler={dataHandler}
              editorHandler={editorHandler}
              handleSelectBoxChange={handleSelectBoxChange}
              handleSelectTimeChange={handleSelectTimeChange}
              handleEnforceDateChange={handleEnforceDateChange}
            />
            <PopUpFoot buttons={BlueAndGrayBtn} />
          </>
        }
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      ></PopUp>
    </>
  );
}
