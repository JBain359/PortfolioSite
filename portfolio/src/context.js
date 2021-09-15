import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [page, setPage] = useState('web');
  const webColor = '#3fd1b1';
  const pixelColor = '#ffa800';
  const gameColor = '#da2c49';

  return (
    <AppContext.Provider
      value={{
        setPage,
        page,
        webColor,
        pixelColor,
        gameColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
