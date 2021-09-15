import p5 from 'p5';
import React, { useState, useEffect } from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import drawBanner from './BannerDots';

const Sketch = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const checkSize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    drawBanner(p5);
    return () => {
      // cleanup
      window.removeEventListener('resize', checkSize);
    };
  }, [screenWidth]);

  return <ReactP5Wrapper sketch={drawBanner} />;
};

export default Sketch;
