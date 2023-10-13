import styled from '../../../styles/components/formManage/formSelectPopUp/FormSelect.module.css';
import React from 'react';

export default function FormSelect() {
  return (
    <div className={styled.formSelectContainer}>
      <div className={styled.formSelectSearchArea}>
        <input type="text" placeholder="양식명을 입력하세요..." />
      </div>
      <div className={styled.formSelectTableArea}></div>
    </div>
  );
}
