import React, { Suspense } from 'react';
import { useGlobalContext } from './context';
// import Zoom from 'react-medium-image-zoom';
// import 'react-medium-image-zoom/dist/styles.css';

const Gallery = ({ galleryPath, galleryName, gallerySub }) => {
  const { openModal, modalImgIndex } = useGlobalContext();

  const importAllImages = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  };

  const images = importAllImages(galleryPath);

  return (
    <>
      <div className="gallery-container">
        <h3>{galleryName}</h3>
        <h5>{gallerySub}</h5>
        <ul>
          {Object.keys(images).map((key, index) => {
            return (
              <li key={index} className="gallery-item">
                <Suspense fallback={<div>Loading...</div>}>
                  <button onClick={() => openModal(index, images)}>
                    <img src={images[key].default} alt={key} />
                  </button>
                </Suspense>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Gallery;
