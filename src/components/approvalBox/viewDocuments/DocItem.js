import styled from '../../../styles/components/ApprovalBox/DocItem.module.css';
import defaultUserIcon from '../../../assets/imgs/default_user.png';
import React from 'react';
import PopUp from '../../common/PopUp';
import ApprovalDetail from '../../approvalManage/approvalDetail/ApprovalDetail';
import { useState } from 'react';

function DocItem(props) {
  //문서상태에 따른 글자색
  const getTxtColor = () => {
    if (props.docStatus === 'A') {
      return '#20C997';
    } else if (props.docStatus === 'P') {
      return '#46A3F0';
    } else if (props.docStatus === 'R') {
      return '#FF8787';
    } else if (props.docStatus === 'W') {
      return '#F0C325';
    } else {
      return '';
    }
  };

  const getBgColor = () => {
    if (props.docStatus === 'A') {
      return '#E7F7F4';
    } else if (props.docStatus === 'P') {
      return '#E5F4FF';
    } else if (props.docStatus === 'R') {
      return '#FFEEF1';
    } else if (props.docStatus === 'W') {
      return '#FFF5E5';
    } else {
      return '';
    }
  };

  const getStatusText = () => {
    switch (props.docStatus) {
      case 'A':
        return '승인'; // 종결 텍스트
      case 'P':
        return '진행'; // 진행 텍스트
      case 'R':
        return '반려'; // 반려 텍스트
      case 'W':
        return '상신'; // 상신 텍스트
      default:
        return ''; // 기본값 (아무 텍스트도 표시하지 않음)
    }
  };

  const txtColor = getTxtColor();
  const bgColor = getBgColor();

  return (
    <ul>
      <li className={styled.itembox} onClick={props.onClick}>
        {/* <div className={styled.checkboxArea}>
              <input type="checkbox"></input>
            </div> */}
        <div className={styled.dateText}>{props.date}</div>
        <div className={styled.element}>
          <div className={styled.elementText}>
            <span>{props.title}</span>
          </div>
          <div className={styled.info}>
            <div className={styled.txtinfo}>{props.formName}</div>
            <div className={styled.bar}>|</div>
            <div className={styled.txtinfo}>{props.docNumber}</div>
          </div>
        </div>
        <div className={styled.docUser}>
          <div className={styled.imginfo}>
            <img src={defaultUserIcon} alt="userphoto" />
          </div>
          <div className={styled.userinfo}>
            <div className={styled.name}>{props.sendUser}</div>
            <div className={styled.departementInfo}>
              <div className={styled.departementList}>
                <div className={styled.txtdep}>{props.sendDepart}</div>
                {/* <div className={styled.txtdep}>|</div> */}
                <div className={styled.txtdep}>{props.sendDepartDetail}</div>
              </div>
            </div>
          </div>
          <div className={styled.docStatus}>
            <div className={styled.process}>
              <div
                className={styled.txtline}
                style={{ color: txtColor, backgroundColor: bgColor }} // 백그라운드 컬러 속성명 수정
              >
                <span>{getStatusText()}</span>
                <span>{'(' + props.lastUser + ')'}</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}
export default DocItem;
