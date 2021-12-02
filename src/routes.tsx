import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@/views/Home';
import Error404 from '@/views/Error';
import Checkout from '@/views/Checkout';
import Header from './components/Header';
import Footer from './components/Footer';

const RoutesComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesComponent;
