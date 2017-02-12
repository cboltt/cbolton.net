import React, { Component } from 'react';
import { Link } from 'react-router';

import LandingHeader from '../../components/Landing/LandingHeader';

export default class Landing extends Component {
  render() {
    const { children } = this.props;

    const socialLinks = [
      {
        text: 'LinkedIn',
        href: 'http://google.ca',
      },
      {
        text: 'Email',
        href: 'http://google.ca',
      },
      {
        text: 'Github',
        href: 'http://google.ca',
      },
    ];

    return (
      <div className='Landing'>
        <LandingHeader links={ socialLinks } />
        { children }
      </div>
    );
  }
}
Landing.propTypes = {
  children: React.PropTypes.node,
};
Landing.defaultProps = {
  children: '',
};
