import React, { useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImgIndex, setModalImgIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState([]);

  const history = useHistory();
  const location = useLocation();

  const webColor = '#3fd1b1';
  const pixelColor = '#ffa800';
  const gameColor = '#da2c49';

  const openModal = (index, gallery) => {
    const keys = Object.keys(gallery);

    setIsModalOpen(true);
    setModalImgIndex(index);
    setCurrentGallery(gallery);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToWeb = () => {
    if (location.pathname !== '/') {
      history.push('/');
    }
  };

  const goToPixel = () => {
    if (location.pathname !== '/pixel') {
      history.push('/pixel');
    }
  };

  const goToGame = () => {
    if (location.pathname !== '/game') {
      history.push('/game');
    }
  };

  return (
    <AppContext.Provider
      value={{
        goToPixel,
        goToWeb,
        goToGame,
        openModal,
        closeModal,
        setCurrentGallery,
        setModalImgIndex,
        currentGallery,
        modalImgIndex,
        isModalOpen,
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
