import React from 'react';

import Lottie from 'react-lottie';

import * as animationData from '@/assets/animation/mario.json';

import { ILoadComponent } from '@/types';

const Loader: React.FC<ILoadComponent> = ({ show }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (show) {
    return (
      <>
        <Lottie options={defaultOptions} width={400} />
      </>
    );
  }

  return <div />;
};

export default Loader;
