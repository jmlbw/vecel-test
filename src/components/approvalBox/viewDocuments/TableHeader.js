import React from 'react';
import styled from '../../../styles/components/ApprovalBox/ViewDocBox.module.css';
import { useApprovalBox } from '../../../contexts/ApprovalBoxContext';

function TableHeader() {
  const { state, setState } = useApprovalBox();
  let { viewItem } = state;

  const setDatename = () => {
    if (viewItem.includes('send') || viewItem.includes('reference')) {
      return '기안일';
    } else if (viewItem.includes('tempor')) {
      return '작성일';
    } else if (viewItem.includes('pend')) {
      return '도착일';
    } else if (viewItem.includes('concluded')) {
      return '결재일';
    }
  };

  return (
    <div className={styled.tableheader}>
      <div className={styled.titleAndcontents}>
        <span className={styled.title1}>{setDatename()}</span>
        <span className={styled.title2}>제목/문서번호</span>
        <span className={styled.title3}>기안자/기안부서</span>
        <span className={styled.title4}>
          {viewItem !== 'tempor' && '결재상태'} {/* 변경된 부분: !== 사용 */}
        </span>
      </div>
    </div>
  );
}
export default TableHeader;
