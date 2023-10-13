import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../../styles/components/ApprovalBox/SearchDate.module.css';

function SearchDate({ onDateChange }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const setChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onDateChange(start, end);
  };

  return (
    <div className={styles.datebox}>
      <DatePicker
        selectsRange={true}
        className={styles.datepicker}
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        maxDate={new Date()}
        onChange={(dates) => setChangeDate(dates)}
        placeholderText="기간을 선택하세요"
      />
    </div>
  );
}

export default SearchDate;
