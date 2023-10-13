import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import styled from '../../../../styles/components/approvalManage/approvalRegist/components/SelectDate.module.css';
import moment from 'moment';

export default function SelectDate({ onChange, baseDate }) {
  const [value, setValue] = useState(
    baseDate !== null ? dayjs(baseDate) : dayjs(moment())
  );

  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(value);
    }
  }, [value, onChange]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'TimePicker']}>
        <DatePicker
          label="날짜"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          className={styled.inputbox}
        />
        <TimePicker
          label="시간"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          className={styled.inputbox}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
