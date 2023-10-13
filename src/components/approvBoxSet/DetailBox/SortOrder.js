import React from 'react';
import styled from '../../../styles/pages/ApprovalBoxSetPage.module.css';
import { useApprovalBoxManage } from '../../../contexts/ApprovalBoxManageContext';
import { useState } from 'react';
import { useEffect } from 'react';

function SortOrder(props) {
  const [localSortOrder, setLocalSortOrder] = useState('');
  const { approvalBoxState, setApprovalBoxState } = useApprovalBoxManage();

  useEffect(() => {
    setLocalSortOrder(props.boxName); // props로 전달받은 boxName을 로컬 상태에 설정
  }, [props.sortOrder]);

  const handleLocalInputChange = (e) => {
    const updatedName = e.target.value;
    setLocalSortOrder(updatedName);
    setApprovalBoxState((prevState) => ({
      ...prevState,
      boxName: updatedName,
    }));
    props.handleInputChange && props.handleInputChange(e);
  };

  return (
    <div className={styled.inputItem}>
      <div style={props.commonCellStyle}>
        <div className={styled.text}>정렬순서</div>
      </div>
      <div style={props.commonDataStyle}>
        <div>
          <input
            type="text"
            value={localSortOrder || ''}
            className={styled.inputstyle}
            onChange={handleLocalInputChange}
          />
        </div>
      </div>
    </div>
  );
}
export default SortOrder;
