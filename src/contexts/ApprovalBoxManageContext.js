import React, { createContext, useState, useContext } from 'react';

const initialState = {
  boxId: null,
};

const approvalBoxInit = {
  approvalBoxId: null,
  compId: null,
  approvalBoxName: null,
  viewItems: [],
  approvalBoxUsedStatus: 0,
  menuUsingRange: null,
  sortOrder: null,
};

const ApprovalBoxManageContext = createContext();

export const ApprovalBoxManageProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [approvalBoxState, setApprovalBoxState] = useState(approvalBoxInit);

  return (
    <ApprovalBoxManageContext.Provider
      value={{
        state,
        setState,
        approvalBoxState,
        setApprovalBoxState,
        approvalBoxInit,
      }}
    >
      {children}
    </ApprovalBoxManageContext.Provider>
  );
};

export const useApprovalBoxManage = () => {
  const context = useContext(ApprovalBoxManageContext);
  if (!context) {
    throw new Error(
      'useApprovalBoxManage must be used within a ApprovalBoxManageProvider'
    );
  }
  return context;
};
