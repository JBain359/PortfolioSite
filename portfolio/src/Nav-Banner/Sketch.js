import p5 from 'p5';
import React, { useState, useEffect } from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import drawBanner from './bannerDots';

const Sketch = () => {
  // useEffect(() => {
  //   drawBanner(p5);
  // }, [window.innerWidth]);

  return <ReactP5Wrapper sketch={drawBanner} />;
};

export default Sketch;
