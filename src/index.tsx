import React from 'react';
import { render } from 'react-dom';
import './styles/index.scss';

import { Provider } from 'react-redux';
import store from './store';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RoutesComponent from './routes';

render(
  <Provider store={store}>
    <ToastContainer />
    <RoutesComponent />
  </Provider>,
  document.getElementById('root'),
);
