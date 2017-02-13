import React, { Component } from 'react';
import { Link } from 'react-router';
import BEMHelper from 'react-bem-helper';

import TabCount from '../TabCount'

const Introduction = ({ paragraph, tabCount }) => {

  const classes = new BEMHelper({
    name: 'introduction',
    prefix: 'c-',
  });

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

Introduction.propTypes = {
  paragraph: React.PropTypes.string.isRequired,
}

export default Introduction;
