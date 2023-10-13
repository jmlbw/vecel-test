import styles from '../../styles/components/ApprovalBox/ApprovalRightHeader.module.css';
import React, { useContext, useState } from 'react';
import Search from './Search';
import { useApprovalBox } from '../../contexts/ApprovalBoxContext';

function ApprovalRightHeader() {
  const [isDropdownView, setDropdownView] = useState(false);
  const { state, setState } = useApprovalBox();

  const { detailSearchState, setDetailSearchState, detailSearchInitState } =
    useApprovalBox();

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
    setState((prevState) => ({
      ...prevState,
      view: !prevState.view,
    }));
    setDetailSearchState(detailSearchInitState);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  return (
    <div className={styles.list}>
      <Search></Search>
      <div className={styles.container} onBlur={handleBlurContainer}>
        <label onClick={handleClickContainer}>
          <button className={styles.dropdownBtn}>
            {isDropdownView ? '▲' : '▼'}
          </button>
        </label>
      </div>
    </div>
  );
}
export default ApprovalRightHeader;
