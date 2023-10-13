import React, { useState } from 'react';
import { Select, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from '../../styles/components/org/OrgSearch.module.css';
import { getOrgSeartch } from '../../apis/orgAPI/getOrgSeartch';

export default function OrgSearch({ view, onCheckBox, onSearch }) {
  const userlist = [{ name: '회사' }, { name: '부서' }, { name: '사용자' }];
  const deptList = [{ name: '회사' }, { name: '사업장' }, { name: '부서' }];

  const [category, setCategory] = useState('회사');
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    try {
      const response = await getOrgSeartch(category, search);
      if (response.status === 200) {
        onSearch(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // const [isChecked, setIsChecked] = useState(false);
  const handleCheckBox = (e) => {
    // setIsChecked(e.target.checked);
    onCheckBox(e.target.checked);
  };

  return (
    <div className={styled.box_container}>
      <Select
        className={styled.org_search_selectbox}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {(view === 'dept' ? deptList : userlist).map((item, index) => (
          <MenuItem key={index} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>

      <div className={styled.select_box_container}>
        <input
          className={styled.select_box_input}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="검색"
        />

        <button className={styled.select_box_button} onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>
      <label className={styled.checkbox_label}>
        <input type="checkbox" onChange={handleCheckBox} />
        하위부서 전체
      </label>
    </div>
  );
}
