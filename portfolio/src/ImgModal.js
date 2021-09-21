import React, { useRef, useState, useEffect } from 'react';
import { useGlobalContext } from './context';
import Left from './assets/ic-chevron-left@4x.jpg';

const ImgModal = (source) => {
  const {
    isModalOpen,
    closeModal,
    currentGallery,
    modalImgIndex,
    setModalImgIndex,
  } = useGlobalContext();

  const [myImg, setMyImg] = useState('');
  const imageRef = useRef([]);

  const nextImg = () => {
    const keys = Object.keys(currentGallery);
    setModalImgIndex((modalImgIndex + 1) % keys.length);
  };

  const prevImg = () => {
    const keys = Object.keys(currentGallery);

    if (modalImgIndex === 0) {
      setModalImgIndex(keys.length - 1);
    } else {
      setModalImgIndex((modalImgIndex - 1) % keys.length);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      const keys = Object.keys(currentGallery);

      imageRef.current.style.opacity = '0';
      setTimeout(() => {
        imageRef.current.style.opacity = '1';
        setMyImg(currentGallery[keys[modalImgIndex]]);
      }, 500);
    } else {
      setMyImg('');
    }
  }, [isModalOpen, modalImgIndex]);

  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <h3 className="prev-btn-ux">&#8678;</h3>
      <h3 className="next-btn-ux">&#8680;</h3>
      <button className="next-prev-btn" onClick={prevImg}></button>

      <button className="close-modal-btn" onClick={closeModal}>
        <div className="modal-container">
          <img ref={imageRef} src={myImg && myImg.default} alt="" />
        </div>
      </button>

      <button className="close-modal-btn-ux" onClick={closeModal}>
        <h3>close</h3>
      </button>

      <button className="next-prev-btn" onClick={nextImg}></button>
    </div>
  );
};

export default ImgModal;
