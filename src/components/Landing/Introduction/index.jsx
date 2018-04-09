import React, { Component } from 'react';
import { Link } from 'react-router';
import BEMHelper from 'react-bem-helper';

import TabCount from '../TabCount'

const Introduction = ({ paragraph, languages, tabCount }) => {

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
        { paragraph.about }
        <br />
        <br />
        { paragraph.languages }
      </p>
      <div { ...classes('tabCount') }>
        <TabCount tabCount={ tabCount } />
      </div>
    </div>
  );
}

Introduction.propTypes = {
  paragraph: React.PropTypes.object.isRequired,
}

export default Introduction;
