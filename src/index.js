import App from './js/views/App';
import Landing from './js/views/Landing';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './scss/app.scss';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Landing } />
    </Route>
  </Router>,
  document.getElementById('root') // eslint-disable-line
);
