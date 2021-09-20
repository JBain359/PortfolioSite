import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './context';

const ImgModal = (source) => {
  const { isModalOpen, closeModal, currentGallery } = useGlobalContext();
  const [myImg, setMyImg] = useState('');

  useEffect(() => {
    if (isModalOpen) {
      const keys = Object.keys(currentGallery);

      setMyImg(currentGallery[keys[source['source']]]);
    } else {
      setMyImg('');
    }
  }, [isModalOpen]);

  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <button className="close-modal-btn" onClick={closeModal}>
        <div className="modal-container">
          <img src={myImg && myImg.default} alt="" />
        </div>
      </button>
    </div>
  );
};

export default ImgModal;
