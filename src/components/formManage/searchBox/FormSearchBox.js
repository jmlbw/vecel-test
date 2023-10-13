import React from 'react';
import styled from '../../../styles/components/formManage/searchBox/SearchBox.module.css';
import InnerBox from '../../common/InnerBox';
import {
  ItemBox,
  TextComp,
  InputComp,
  SelectComp,
} from './components/SearchItem';
import { AiOutlineSearch } from 'react-icons/ai';
import { useFormManage } from '../../../contexts/FormManageContext';

export default function FormSearchBox({ searchHandler }) {
  const { searchData, setSearchData, setData } = useFormManage();

  const dataHandler = (id, data) => {
    setSearchData({ ...searchData, [id]: data });
  };

  const returnContent = () => {
    return (
      <div className={styled.container}>
        <div className={styled.optionsArea}>
          <ItemBox
            children={
              <>
                <TextComp text={'회사'} />
                <SelectComp
                  width={'170px'}
                  options={setData.compList}
                  id={'compId'}
                  dataHandler={dataHandler}
                />
              </>
            }
          ></ItemBox>
          <ItemBox
            children={
              <>
                <TextComp text={'사용여부'} />
                <SelectComp
                  width={'170px'}
                  options={setData.statusList}
                  id={'status'}
                  dataHandler={dataHandler}
                />
              </>
            }
          ></ItemBox>
          <ItemBox
            children={
              <>
                <TextComp text={'양식명'} />
                <InputComp id={'formName'} dataHandler={dataHandler} />
              </>
            }
          ></ItemBox>
        </div>
        <div className={styled.iconArea}>
          <AiOutlineSearch onClick={searchHandler} />
        </div>
      </div>
    );
  };

  return <InnerBox width={'100%'} children={returnContent()}></InnerBox>;
}
