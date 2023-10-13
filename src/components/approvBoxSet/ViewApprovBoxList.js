import React from 'react';
import ApprovalBoxList from '../../components/approvBoxSet/ApprovalBoxList';
import styled from '../../styles/pages/ApprovalBoxSetPage.module.css';
import Button from '../../components/common/Button';
import InnerBox from '../common/InnerBox';
import Datalist from './Datalist';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useApprovalBox } from '../../contexts/ApprovalBoxContext';
import { useApprovalBoxManage } from '../../contexts/ApprovalBoxManageContext';

function ViewApprovalBoxList() {
  const [selectedCompanyId, setSelectedCompanyId] = useState(0);
  const { state, setState } = useApprovalBoxManage();

  const handleAddButtonClick = () => {
    setState((prevState) => ({
      ...prevState,
      boxId: undefined,
    }));
  };

  return (
    <InnerBox
      height="100%"
      width="50%"
      font_size="14px"
      text="결재함 목록"
      titleChildren={
        <Button
          label={'추가'}
          btnStyle={'gray_btn'}
          onClick={handleAddButtonClick}
        />
      }
    >
      <div className={styled.searchbox}>
        <Datalist onCompanyChange={setSelectedCompanyId} />
        <div className={styled.inputSearch}>
          <input type="text" placeholder="결재함명을 입력하세요" />
          <button className={styled.searchbtn}>
            <SearchIcon style={{ fontSize: '15px' }} />
          </button>
        </div>
      </div>
      <div className={styled.boxlist}>
        <ApprovalBoxList companyId={selectedCompanyId} />
      </div>
    </InnerBox>
  );
}
export default ViewApprovalBoxList;
