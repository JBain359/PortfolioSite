import React from 'react';
import Placeholder from './assets/Placeholder.png';
import Flavor from './processing/BannerDots/BannerDots.pde';
import Sketch from './Sketch';

const Banner = () => {
  return (
    <section className="banner">
      {/* <img src={Placeholder} alt="placeholder" /> */}
      <Sketch></Sketch>
    </section>
  );
};

export default Banner;
