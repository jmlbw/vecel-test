import styles from '../../../styles/components/common/TitleBox.module.css';
import React from 'react';

function ViewCount(props) {
  return (
    <div className={styles.docCount}>
      <span>{props.count}</span>건
    </div>
  );
}
export default ViewCount;
