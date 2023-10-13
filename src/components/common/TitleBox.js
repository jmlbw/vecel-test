import React, { useState } from 'react'; // 'react' 패키지에서 useState와 함께 React도 import
import styles from '../../styles/components/common/TitleBox.module.css';
import ViewCount from '../approvalBox/viewDocuments/ViewCount';
import ReloadIcon from '../../assets/imgs/reload.png';

function Titlebox(props) {
  const renderDocCount = () => {
    if (props.view === 'approval') {
      return (
        <div className={styles.showApprobox}>
          <ViewCount count="5"></ViewCount>{' '}
          <img className={styles.reloadIcon} src={ReloadIcon} alt="reload" />
        </div>
      );
    }
    return null;
  };
  return (
    <div className={styles.titleBoxContainer}>
      <div className={styles.left}>
        <div className={styles.titleSearchBox}>
          <div className={styles.boxtitle}>{props.title}</div>
          {renderDocCount()}
          {/* <img className={styles.reloadIcon} src={ReloadIcon} alt="reload" /> */}
        </div>
      </div>
      <div className={styles.right}>{props.componentProp}</div>
    </div>
  );
}
export default Titlebox;
