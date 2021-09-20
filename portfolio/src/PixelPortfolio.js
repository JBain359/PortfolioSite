import React, { useEffect, useRef } from 'react';
import Gallery from './Gallery';
import GALLERIES from './galleries';
import FadeInSection from './FadeInSection';
import ImgModal from './ImgModal';
import { useGlobalContext } from './context';

const PixelPortfolio = () => {
  const { modalImgIndex } = useGlobalContext();

  return (
    <>
      <section className="pixel-portfolio">
        {Object.entries(GALLERIES).map((gallery) => {
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
      <ImgModal source={modalImgIndex}></ImgModal>
    </>
  );
};

export default PixelPortfolio;
