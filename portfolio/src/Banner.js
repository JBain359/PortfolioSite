import React from 'react';
import Placeholder from './assets/Placeholder.png';
import Flavor from './processing/BannerDots/BannerDots.pde';
import Sketch from './Sketch';
import AboutCard from './AboutCard';

const Banner = () => {
  return (
    <section className="banner">
      {/* <img src={Placeholder} alt="placeholder" /> */}
      <Sketch></Sketch>
      <AboutCard></AboutCard>
    </section>
  );
};

export default Banner;
