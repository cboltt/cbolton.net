import App from './views/App';
import Landing from './views/Landing';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './styles/app.scss';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Landing } />
    </Route>
  </Router>,
  document.getElementById('root') // eslint-disable-line
);
