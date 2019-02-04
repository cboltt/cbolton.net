import React from 'react';
import ReactDOM from 'react-dom';
import {App, serviceWorker} from './foundation';
import './index.scss';

ReactDOM.render(<App />, document.getElementById('ui-root'));

// TODO: Enable this in the future (http://bit.ly/CRA-PWA)
serviceWorker.unregister();
