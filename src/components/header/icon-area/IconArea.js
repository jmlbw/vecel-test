import styles from '../../../styles/components/header/iconArea.module.css';
import ProfileDrop from './ProfileDrop';
import NoticeDrop from './NoticeDrop';
import React from 'react';

function IconArea() {
  return (
    <div className={styles.icon_box}>
      <ul className={styles.iconlist}>
        <NoticeDrop />
        <ProfileDrop />
      </ul>
    </div>
  );
}

export default IconArea;
