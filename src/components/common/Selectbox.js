import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from '../../styles/components/common/Selectbox.module.css';
import { useState, useEffect } from 'react';

//list는 외부에서 받아서 사용합니다.
export default function SelectBox({ selectList, width, height, onChange }) {
  const [selectedValue, setSelectedValue] = useState(''); // 초기값은 빈 문자열로 설정

  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(selectedValue);
    }
  }, [selectedValue, onChange]);
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 50 }}>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          className={styled.selectBox}
          style={{ width: `${width}px`, height: `${height}px` }}
          value={selectedValue} // 현재 선택된 값 설정
          onChange={(event) => setSelectedValue(event.target.value)} // 값 변경 시 호출될 콜백 함수
        >
          {!selectList.isEmpty
            ? selectList.map((ele, index) => {
                return (
                  <MenuItem
                    key={index}
                    value={ele.seqCode}
                    className={styled.selectmenu}
                  >
                    {ele.name}
                  </MenuItem>
                );
              })
            : null}
        </Select>
      </FormControl>
    </div>
  );
}
