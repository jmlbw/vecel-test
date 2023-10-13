import styled from '../../../styles/pages/ApprovalBoxViewPage.module.css';
import React from 'react';
import { useApprovalBox } from '../../../contexts/ApprovalBoxContext';
import TemporSearchDetail from './TemporSearchDetail';
import SendSearchDetail from './SendSearchDetail';
import RemainSearchDetail from './RemainSearchDeatil';

function SearchDetailBox() {
  const { state, setState } = useApprovalBox();
  const { viewItem } = state;

  function setDatename() {
    if (viewItem.includes('send') || viewItem.includes('reference')) {
      return '기안일';
    } else if (viewItem.includes('tempor')) {
      return '작성일';
    } else if (viewItem.includes('pend')) {
      return '도착일';
    } else if (viewItem.includes('concluded')) {
      return '결재일';
    }
  }

  let searchDetailComponent;

  if (viewItem.includes('tempor')) {
    searchDetailComponent = <TemporSearchDetail dateName={setDatename()} />;
  } else if (viewItem.includes('send')) {
    searchDetailComponent = <SendSearchDetail dateName={setDatename()} />;
  } else {
    searchDetailComponent = <RemainSearchDetail dateName={setDatename()} />;
  }

  return <div className={styled.searchDetail}>{searchDetailComponent}</div>;
}
export default SearchDetailBox;
