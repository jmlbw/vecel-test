import React, { createContext, useContext, useState } from 'react';

const searchInitState = {
  id: 0,
  compId: '',
  compName: '',
  formName: '',
  status: 1,
};

const setInitState = {
  compList: [],
  statusList: [
    { name: '사용', id: 1 },
    { name: '미사용', id: 0 },
  ],
};

const detailInitState = {
  code: '',
  compId: '',
  compName: '',
  formName: '',
  scope: [],
  defaultForm: '',
  mainForm: '',
  status: '',
  approvalLine: [],
};

//0: default, 1: create, 2: update,
const flagInitState = { flag: 0 };

const FormManageContext = createContext();

const FormManageProvider = ({ children }) => {
  const [searchData, setSearchData] = useState(searchInitState);
  const [setData, setSetData] = useState(setInitState);
  const [detailData, setDetailData] = useState(detailInitState);
  const [flagData, setFlagData] = useState(flagInitState);

  const createDetailData = () => {
    setFlagData(1);
    setDetailData({
      ...detailInitState,
      compId: setData.compList[0].id,
      compName: setData.compList[0].name,
    });
  };
  const updateDetailData = () => {
    setFlagData(2);
  };
  const defaultDetailData = () => {
    setFlagData(0);
  };

  return (
    <FormManageContext.Provider
      value={{
        searchData,
        setSearchData,
        setData,
        setSetData,
        detailData,
        setDetailData,
        flagData,
        createDetailData,
        updateDetailData,
        defaultDetailData,
      }}
    >
      {children}
    </FormManageContext.Provider>
  );
};

const useFormManage = () => {
  const context = useContext(FormManageContext);
  if (!context) {
    throw new Error('useFormManage must be used within a FormManageProvider');
  }
  return context;
};

export { useFormManage, FormManageProvider };
