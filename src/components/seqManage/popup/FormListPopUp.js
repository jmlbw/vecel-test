import React, { useState, useEffect } from 'react';
import styled from '../../../styles/components/formManage/searchBox/SearchBox.module.css';
import {
  ItemBox,
  TextComp,
  InputComp,
} from '../../formManage/searchBox/components/SearchItem';
import { AiOutlineSearch } from 'react-icons/ai';
import DataList from '../../formManage/formList/DataList';
import { columns } from '../../../assets/datas/form_popup_list';
import getFormListAll from '../../../apis/commonAPI/getFormListAll';

export default function FormListPopUp({ setGridData }) {
  const [rows, setRows] = useState([]);
  const [filetedRows, setFiletedRows] = useState([]);

  const searchDataHandler = (id, data) => {
    setFiletedRows(
      rows.filter((ele) => {
        if (ele.include(data)) {
          return true;
        }
        return false;
      })
    );
  };
  const gridDataHandler = (data) => {
    console.log(data);
    setGridData(data);
  };

  useEffect(() => {
    getFormListAll()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRows(data);
        setFiletedRows(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ItemBox
          children={
            <>
              <TextComp text={'양식명'} />
              <InputComp
                id={'search'}
                dataHandler={searchDataHandler}
                placeholder={'양식명을 입력하세요.'}
              />
            </>
          }
        />
        <AiOutlineSearch />
      </div>
      <DataList
        rows={filetedRows}
        columns={columns}
        dataHandler={gridDataHandler}
      />
    </>
  );
}
