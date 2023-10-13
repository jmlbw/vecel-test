import React from 'react';
import styled from '../styles/pages/ApprovalBoxSetPage.module.css';
import ViewApprovalBoxList from '../components/approvBoxSet/ViewApprovBoxList';
import DetailApprovalBox from '../components/approvBoxSet/DetailApprovalBox';

function ApprovalBoxSetPage() {
  return (
    <div className={styled.container}>
      <ViewApprovalBoxList />
      <DetailApprovalBox />
    </div>
  );
}
export default ApprovalBoxSetPage;
