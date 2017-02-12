import React, { Component } from 'react';

import LandingHeader from '../../components/Landing/LandingHeader';
import Projects from '../../components/Landing/Projects';

import landingData from '../../../data/landing.json';

export default class Landing extends Component {
  render() {
    const { children } = this.props;
    const socialLinks = landingData.socialLinks;
    const projects = landingData.projects;

    return (
      <div className='Landing'>
        <LandingHeader links={ socialLinks } />
        <Projects projectsData={ projects } />
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
