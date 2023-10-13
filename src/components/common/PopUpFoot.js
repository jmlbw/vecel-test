import React from 'react';
import Button from './Button';
import styles from '../../styles/components/common/PopUpFoot.module.css';

export default function PopUpFoot({ buttons }) {
  return (
    <div className={styles.foot}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          label={button.label}
          onClick={button.onClick}
          btnStyle={button.btnStyle}
        />
      ))}
    </div>
  );
}
