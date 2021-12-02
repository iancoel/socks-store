import React from 'react';
import { render } from 'react-dom';
import './styles/index.scss';

import { Provider } from 'react-redux';
import store from './store';

import RoutesComponent from './routes';

render(
  <Provider store={store}>
    <RoutesComponent />
  </Provider>,
  document.getElementById('root'),
);
