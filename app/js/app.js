import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'views/App';
import Landing from 'views/Landing';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Landing } />
    </Route>
  </Router>,
  document.getElementById('app') // eslint-disable-line
);
