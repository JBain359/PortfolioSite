import React from 'react';
import Gallery from './Gallery';
import GALLERIES from './galleries';
import FadeInSection from './FadeInSection';

const PixelPortfolio = () => {
  return (
    <section className="pixel-portfolio">
      {Object.entries(GALLERIES).map((gallery) => {
        console.log(gallery);
        return (
          <FadeInSection>
            <Gallery
              galleryPath={gallery[1]['path']}
              galleryName={gallery[1]['name']}
              gallerySub={gallery[1]['subtitle']}
            ></Gallery>
          </FadeInSection>
        );
      })}
    </section>
  );
};

export default PixelPortfolio;
