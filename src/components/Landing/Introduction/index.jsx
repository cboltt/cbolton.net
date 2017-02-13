import React, { Component } from 'react';
import { Link } from 'react-router';
import BEMHelper from 'react-bem-helper';

import TabCount from '../TabCount'

const classes = new BEMHelper({
  name: 'introduction',
  prefix: 'c-',
});


export default class Introduction extends Component {
  render() {
    const {
      paragraph,
      tabCount
    } = this.props;

    return (
      <div { ...classes() }>
        <h1 { ...classes('title') }>
          About
        </h1>
        <p { ...classes('paragraph') }>
          { paragraph }
        </p>
        <div { ...classes('tabCount') }>
          <TabCount tabCount={ tabCount } />
        </div>
      </div>
    );
  }
}
Introduction.propTypes = {
  paragraph: React.PropTypes.string.isRequired,
}
