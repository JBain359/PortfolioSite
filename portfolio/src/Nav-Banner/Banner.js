import React from 'react';
import Sketch from './Sketch';
import AboutCard from './AboutCard';

const Banner = () => {
  return (
    <section className="banner">
      {/* <img src={Placeholder} alt="placeholder" /> */}
      <div className="sketch-container">
        <Sketch></Sketch>
      </div>
      <AboutCard></AboutCard>
    </section>
  );
};

export default Banner;
