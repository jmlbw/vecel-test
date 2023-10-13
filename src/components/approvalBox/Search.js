import styled from '../../styles/components/ApprovalBox/Search.module.css';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import React, { useState } from 'react';
import { useApprovalBox } from '../../contexts/ApprovalBoxContext';

function Search() {
  const { state, setState } = useApprovalBox();
  const [searchWords, setSearchWords] = useState('');

  const searchbtnhandle = () => {
    const searchItem = document.getElementById('searchInput').value.trim(); // 이 부분이 변경됨

    setState((prevState) => ({
      ...prevState,
      searchInput: searchItem,
      searchBtnStatus: !prevState.searchBtnStatus,
    }));
  };

  return (
    <div className={styled.searchbox}>
      <input
        id="searchInput" // ID 추가
        type="text"
        placeholder=" 검색"
      />
      <button
        className={styled.searchbtn}
        type="button"
        onClick={searchbtnhandle}
      >
        <SearchSharpIcon />
      </button>
    </div>
  );
}

export default Search;
