import React, { useContext } from 'react';
import RowRadioButtonsGroup from '../components/approvalBox/RowRadioButtonsGroup';
import SearchDetailBox from '../components/approvalBox/searchDetailBox/SearchDetailBox';
import InnerBox from '../components/common/InnerBox';
import styles from '../styles/pages/ApprovalBoxViewPage.module.css';
import ViewDocBox from '../components/approvalBox/viewDocuments/ViewDocBox';
import { useApprovalBox } from '../contexts/ApprovalBoxContext';

function ApprovalBoxViewPage() {
  const { state, setState } = useApprovalBox();

  return (
    <div className={styles.outInnerbox}>
      <InnerBox height={'100%'} width={'100%'}>
        <div className={styles.inInnerbox}>
          <div className={styles.searchDetailbox}>
            {state.view && <SearchDetailBox />}
          </div>
          <div className={styles.radiobuttonsBox}>
            <div className={styles.radiogroup}>
              <RowRadioButtonsGroup></RowRadioButtonsGroup>
            </div>
          </div>
          <ViewDocBox></ViewDocBox>
        </div>
      </InnerBox>
    </div>
  );
}
export default ApprovalBoxViewPage;
