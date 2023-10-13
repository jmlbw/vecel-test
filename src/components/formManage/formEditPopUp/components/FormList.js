import styled from '../../../../styles/components/formManage/formEdit/components/FormList.module.css';
import React from 'react';
import { CustomButton } from '../../../common/TinyEditor';

export default function FormList({ formItems, editor }) {
  return (
    <div className={styled.formListContainer}>
      <div className={styled.searchArea}>
        <input type="text" placeholder="검색할 항목을 입력하세요..." />
      </div>

      <div className={styled.formListArea}>
        {formItems.map((ele) => {
          return (
            <CustomButton
              key={ele.formListName}
              label={ele.formListName}
              editor={editor}
              text={ele.formListTag}
            ></CustomButton>
          );
        })}
      </div>
    </div>
  );
}
