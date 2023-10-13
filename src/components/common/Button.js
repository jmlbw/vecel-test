import React from 'react';
import styles from '../../styles/components/common/Button.module.css';

/**
 *
 * @param {Function} onClick 클릭 이벤트 ex) clickHandler
 * @param {String} label 버튼 텍스트 ex) '추가'
 * @param {String} btnStyle 버튼 스타일 ex) blue_btn, gray_btn, popup_blue_btn, popup_gray_btn, popup_non_btn
 * @returns
 */
function Button(props) {
  return (
    <button onClick={props.onClick} className={styles[props.btnStyle]}>
      {props.label}
    </button>
  );
}

export default Button;
