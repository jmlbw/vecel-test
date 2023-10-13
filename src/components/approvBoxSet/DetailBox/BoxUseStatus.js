import React, { useEffect } from 'react';
import styled from '../../../styles/pages/ApprovalBoxSetPage.module.css';
import Radiobtn from '../Radiobtn';
import { useApprovalBoxManage } from '../../../contexts/ApprovalBoxManageContext';

function BoxUseStatus(props) {
  const { approvalBoxState, setApprovalBoxState } = useApprovalBoxManage();

  useEffect(() => {
    setApprovalBoxState((prevState) => ({
      ...prevState,
      approvalBoxUsedStatus: props.useStatus,
    }));
  }, [props.useStatus, setApprovalBoxState]);

  return (
    <div className={styled.inputItem}>
      <div style={props.commonCellStyle}>
        <div className={styled.text}>사용여부</div>
      </div>
      <div style={props.commonDataStyle}>
        <div>
          <Radiobtn
            labels={['사용', '미사용']}
            selectedOption={props.useStatus}
            onChange={props.handleUseStatusChange}
          />
        </div>
      </div>
    </div>
  );
}

export default BoxUseStatus;
