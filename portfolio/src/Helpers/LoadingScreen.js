import React from 'react';
import Loader from 'react-spinners/BeatLoader';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <Loader color="#ffa800" radius={0} height={20} width={20} margin={10} />
      <h2>Loading...</h2>
    </div>
  );
};

export default LoadingScreen;
