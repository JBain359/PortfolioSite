import PropTypes from 'prop-types';
import React, { useState, Suspense } from 'react';
import { useGlobalContext } from './context';
// import Zoom from 'react-medium-image-zoom';
// import 'react-medium-image-zoom/dist/styles.css';

const Gallery = ({ galleryPath, galleryName, gallerySub }) => {
  const { openModal, modalImg } = useGlobalContext();

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
                  <button onClick={() => openModal(images[key].default)}>
                    <img src={images[key].default} alt={key} />
                  </button>
                </Suspense>
              </li>
            );
          })}
        </ul>
      </div>
      <ImgModal source={modalImg}></ImgModal>
    </>
  );
};

const ImgModal = (source) => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <button className="close-modal-btn" onClick={closeModal}>
        <div className="modal-container">
          <img src={source['source']} alt="" />
        </div>
      </button>
    </div>
  );
};

export default Gallery;
