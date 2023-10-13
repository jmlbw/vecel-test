import React, { createContext, useState, useEffect, useContext } from 'react';

const initialState = {
  user: null,
  isLoggedIn: false,
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(state.isLoggedIn));
  }, [state.isLoggedIn]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
