import React, { useState, useEffect } from 'react';

const ScreenData = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const checkSize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);

    return () => {
      // cleanup
      window.removeEventListener('resize', checkSize);
    };
  }, [screenWidth]);

  return <footer>Screen Width: {screenWidth}</footer>;
};

export default ScreenData;
