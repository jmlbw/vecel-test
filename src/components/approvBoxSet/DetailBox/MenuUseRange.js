import React from 'react';
import styled from '../../../styles/pages/ApprovalBoxSetPage.module.css';
import PopUp from '../../common/PopUp';
import Radiobtn from '../Radiobtn';
import { useState } from 'react';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import { useApprovalBoxManage } from '../../../contexts/ApprovalBoxManageContext';
import { useEffect } from 'react';

function MenuUseRange(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { approvalBoxState, setApprovalBoxState } = useApprovalBoxManage();

  useEffect(() => {
    setApprovalBoxState((prevState) => ({
      ...prevState,
      menuUsingRange: props.menuOption,
    }));
  }, [props.menuOption, setApprovalBoxState]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달을 닫기 위한 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMenuOptionChange = (event) => {
    props.setMenuOption(event.target.value);
  };

  return (
    <div className={styled.inputItem}>
      <div style={props.commonCellStyle}>
        <div className={styled.text}>메뉴 사용범위</div>
      </div>
      <div style={props.commonDataStyle}>
        <Radiobtn
          labels={['전체', '선택']}
          values={['T', 'P']} // 여기에 values 추가
          selectedOption={props.menuOption}
          onChange={handleMenuOptionChange}
        />
        {props.menuOption === 'P' && ( // menuOption이 'P'일 때만 렌더링
          <div className={styled.viewUseField}>
            <div className={styled.viewItemBox}></div>
            <PopUp
              title="메뉴 사용범위"
              width="1300px"
              height="600px"
              isModalOpen={isModalOpen}
              openModal={openModal}
              closeModal={closeModal}
              label={<AccountTreeRoundedIcon style={{ color: 'grey' }} />}
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default MenuUseRange;
