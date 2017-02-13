import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from '../App';
import Landing from '../Landing';

export default class AppRouter extends Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ Landing } />
        </Route>
      </Router>
    );
  }
}
