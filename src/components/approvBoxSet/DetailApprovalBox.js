import React, { useState } from 'react';
import Button from '../../components/common/Button';
import InnerBox from '../common/InnerBox';
import DetailBox from './DetailBox';
import { useApprovalBoxManage } from '../../contexts/ApprovalBoxManageContext';
import updateApprovalBox from '../../apis/approvalBoxAPI/updateApprovalBox';

function DetailApprovalBox() {
  const { state, setState, approvalBoxState } = useApprovalBoxManage();

  const handleSaveClick = async () => {
    try {
      const response = await updateApprovalBox(approvalBoxState);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <InnerBox
      height="100%"
      width="50%"
      font_size="14px"
      text="결재함 상세"
      titleChildren={
        <Button
          label={'저장'}
          btnStyle={'gray_btn'}
          onClick={handleSaveClick}
        />
      }
    >
      <DetailBox boxId={state.boxId} />
    </InnerBox>
  );
}

export default DetailApprovalBox;
