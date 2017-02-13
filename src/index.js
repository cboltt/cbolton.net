import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './containers/AppRouter';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './styles/app.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
