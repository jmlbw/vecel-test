import React, { useEffect, useState } from 'react';
import styled from '../../styles/pages/ApprovalBoxSetPage.module.css';
import getBoxDetail from '../../apis/approvalBoxAPI/getBoxDetail';
import ViewItem from './DetailBox/ViewItem';
import BoxCompany from './DetailBox/BoxCompany';
import BoxName from './DetailBox/BoxName';
import BoxUseStatus from './DetailBox/BoxUseStatus';
import MenuUseRange from './DetailBox/MenuUseRange';
import { useApprovalBoxManage } from '../../contexts/ApprovalBoxManageContext';
import SortOrder from './DetailBox/SortOrder';

const commonCellStyle = {
  width: '30%',
};

const commonDataStyle = {
  width: '70%',
};

function DetailBox() {
  const { state } = useApprovalBoxManage();
  const boxId = state.boxId;
  const [menuOption, setMenuOption] = useState('T');
  const [useStatus, setUseStatus] = useState(1);
  const [data, setData] = useState([]);

  const handleUseStatusChange = (event) => {
    setUseStatus(event.target.value);
  };

  const handleInputChange = (e) => {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parsedBoxId = parseInt(boxId, 10);
        // boxId 값이 없거나, 유효한 숫자가 아니면 API 호출을 스킵
        if (isNaN(parsedBoxId)) {
          setData([]);
          return;
        }

        const response = await getBoxDetail(parsedBoxId);
        setData(response.data);
        if (response.data.length > 0) {
          setUseStatus(
            response.data[0].approvalBoxUsedStatus === 1 ? '사용' : '미사용'
          );
          setMenuOption(response.data[0].menuUsingRange);
        }
      } catch (error) {
        console.error('Error fetching box details:', error);
      }
    };

    fetchData();
  }, [state.boxId]);

  if (isNaN(boxId)) {
    return (
      <div className={styled.formcontainer}>
        <BoxCompany
          commonCellStyle={commonCellStyle}
          commonDataStyle={commonDataStyle}
        />
        <BoxName
          commonCellStyle={commonCellStyle}
          commonDataStyle={commonDataStyle}
        />
        <ViewItem
          commonCellStyle={commonCellStyle}
          commonDataStyle={commonDataStyle}
        />
        <BoxUseStatus
          commonCellStyle={commonCellStyle}
          commonDataStyle={commonDataStyle}
          handleUseStatusChange={handleUseStatusChange}
        />
        <MenuUseRange
          commonCellStyle={commonCellStyle}
          commonDataStyle={commonDataStyle}
          setMenuOption={setMenuOption}
        />
        <SortOrder
          commonCellStyle={commonCellStyle}
          commonDataStyle={commonDataStyle}
        />
      </div>
    );
  }

  return (
    <div className={styled.formcontainer}>
      {data.map((boxDetail, index) => (
        <React.Fragment key={index}>
          <BoxCompany
            commonCellStyle={commonCellStyle}
            commonDataStyle={commonDataStyle}
            compId={boxDetail.compId}
          />
          <BoxName
            commonCellStyle={commonCellStyle}
            commonDataStyle={commonDataStyle}
            handleInputChange={handleInputChange}
            boxName={boxDetail.approvalBoxName}
          />
          <ViewItem
            commonCellStyle={commonCellStyle}
            commonDataStyle={commonDataStyle}
            boxId={boxId}
          />
          <BoxUseStatus
            commonCellStyle={commonCellStyle}
            commonDataStyle={commonDataStyle}
            useStatus={useStatus}
            handleUseStatusChange={handleUseStatusChange}
          />
          <MenuUseRange
            commonCellStyle={commonCellStyle}
            commonDataStyle={commonDataStyle}
            menuOption={menuOption}
            setMenuOption={setMenuOption}
          />
          <SortOrder
            commonCellStyle={commonCellStyle}
            commonDataStyle={commonDataStyle}
            handleInputChange={handleInputChange}
            boxName={boxDetail.sortOrder}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default DetailBox;
