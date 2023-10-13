import React from 'react';
import styles from '../../../styles/components/header/LogoArea.module.css';
import logo from '../../../assets/imgs/logo.png';
import { Navigate, useNavigate } from 'react-router-dom';

function LogoArea() {
  const navigate = useNavigate();
  const goHome = function() {
    navigate('/');
  };
  return (
    <div className={styles.logo_box} onClick={goHome}>
      <div className={styles.logo_icon}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default LogoArea;
