import React, { useEffect, useState } from 'react';
import styled from '../../styles/pages/ApprovalBoxSetPage.module.css';
import PopUp from '../common/PopUp';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import Button from '../common/Button';
import { useApprovalBoxManage } from '../../contexts/ApprovalBoxManageContext';

function ViewItemPopup({ checkedItems }) {
  const [selectAll, setSelectAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { approvalBoxState, setApprovalBoxState } = useApprovalBoxManage();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [checkboxStates, setCheckboxStates] = useState({
    상신내역: false,
    미결내역: false,
    '기결내역-종결': false,
    '기결내역-진행': false,
    반려내역: false,
    수신참조내역: false,
  });

  useEffect(() => {
    const initialCheckboxStates = {
      상신내역: false,
      미결내역: false,
      '기결내역-종결': false,
      '기결내역-진행': false,
      반려내역: false,
      수신참조내역: false,
    };

    checkedItems.forEach((item) => {
      if (item.codeValue) {
        initialCheckboxStates[item.codeValue] = true;
      }
    });

    setCheckboxStates(initialCheckboxStates);
  }, [checkedItems]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const newCheckboxStates = { ...checkboxStates };
    for (const key in newCheckboxStates) {
      newCheckboxStates[key] = !selectAll;
    }
    setCheckboxStates(newCheckboxStates);
  };

  const handleCheckboxChange = (itemName) => {
    const newCheckboxStates = { ...checkboxStates };
    newCheckboxStates[itemName] = !newCheckboxStates[itemName];
    setCheckboxStates(newCheckboxStates);
  };

  const handleSave = () => {
    // 선택된 값을 저장하는 코드
    const selectedItems = Object.keys(checkboxStates).filter(
      (itemName) => checkboxStates[itemName]
    );

    setApprovalBoxState({
      ...approvalBoxState,
      viewItems: selectedItems,
    });

    // 모달 닫기
    closeModal();
  };

  return (
    <PopUp
      label={<GridViewRoundedIcon style={{ color: 'grey' }} />}
      title="조회항목 선택"
      width="400px"
      height="440px"
      isModalOpen={isModalOpen}
      openModal={openModal}
      closeModal={closeModal}
      children={
        <div>
          <div className={styled.viewItemContainer}>
            <div className={styled.viewItemList}>
              <div className={styled.viewitem}>
                <div className={styled.topCheckbox}>
                  <input
                    type="checkbox"
                    value="selectAll"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </div>
                <div className={styled.topViewItem}>조회항목</div>
              </div>
              {Object.keys(checkboxStates).map((itemName, index) => (
                <div className={styled.viewitem} key={index}>
                  <div className={styled.checkbox}>
                    <input
                      type="checkbox"
                      value={itemName}
                      checked={checkboxStates[itemName]}
                      onChange={() => handleCheckboxChange(itemName)}
                    />
                  </div>
                  <div className={styled.itemName}>{itemName}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styled.submitBtn}>
            <Button label="확인" onClick={handleSave} btnStyle="blue_btn" />
          </div>
        </div>
      }
    />
  );
}

export default ViewItemPopup;
