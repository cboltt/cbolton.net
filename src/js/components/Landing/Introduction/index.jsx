import React, { Component } from 'react';
import { Link } from 'react-router';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'introduction',
  prefix: 'c-',
});


export default class Introduction extends Component {
  render() {
    const {
      paragraph
    } = this.props;

    return (
      <div { ...classes() }>
        <h1 { ...classes('title', '', 'c--title') }>
          About
        </h1>
      </div>
    );
  }
}
Introduction.propTypes = {
  paragraph: React.PropTypes.string,
}
