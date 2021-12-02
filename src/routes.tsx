import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@/views/Home';
import Error404 from '@/views/Error';
import Checkout from '@/views/Checkout';

const RoutesComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
