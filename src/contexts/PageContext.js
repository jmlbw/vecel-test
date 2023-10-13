import React, { createContext, useState, useContext } from 'react';

const initialState = {
  curPage: 'Home',
};

const PageContext = createContext();

export const PageProvier = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <PageContext.Provider value={{ state, setState }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('useFormManage must be used within a FormManageProvider');
  }
  return context;
};
