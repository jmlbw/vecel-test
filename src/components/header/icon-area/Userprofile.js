import userIcon from '../../../assets/imgs/usericon.png';
import styles from '../../../styles/components/header/userProfile.module.css';
import React, { useState } from 'react';

function Userprofile() {
  const [view, setView] = useState(false);
  return (
    <div className={styles.profile}>
      <div
        className={styles.dropdown}
        onClick={() => {
          setView(!view);
        }}
      >
        <div className={styles.list_user}>
          <img
            src={userIcon}
            className={styles.rounded_circle}
            alt="userphoto"
          />
          <div className={styles.profile_userbox}>
            <span className={styles.userbox_username}>김비파</span>
            <span className={styles.userbox_userdepart}>솔루션사업부문</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Userprofile;
