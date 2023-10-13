import React from 'react';
import styled from '../../../../styles/components/formManage/formDetail/components/FormDetailNav.module.css';

export default function FormDetailNav({ activeButton, handleButtonClick }) {
  return (
    <div className={styled.container}>
      <button
        className={activeButton === 1 ? styled.selectBtn : null}
        onClick={() => handleButtonClick(1)}
      >
        기본
      </button>
      <button
        className={activeButton === 2 ? styled.selectBtn : null}
        onClick={() => handleButtonClick(2)}
      >
        결재라인
      </button>
    </div>
  );
}
