import styles from '../../styles/components/header/Header.module.css';
import LogoArea from './logo_area/LogoArea';
import IconArea from './icon-area/IconArea';
import React from 'react';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <LogoArea></LogoArea>
      <IconArea></IconArea>
    </header>
  );
}
