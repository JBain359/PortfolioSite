import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [page, setPage] = useState('web');
  const history = useHistory();

  const webColor = '#3fd1b1';
  const pixelColor = '#ffa800';
  const gameColor = '#da2c49';

  const goToWeb = () => {
    setPage('web');
    history.push('/');
  };

  const goToPixel = () => {
    setPage('pixel');
    history.push('/pixel');
  };

  const goToGame = () => {
    setPage('game');
    history.push('/game');
  };

  return (
    <AppContext.Provider
      value={{
        setPage,
        goToPixel,
        goToWeb,
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