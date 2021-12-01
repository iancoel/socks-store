import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Home from './views/Home';
import Error404 from './views/Error';

const RoutesComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Provider store={store}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Provider>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
