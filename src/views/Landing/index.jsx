import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';

import LandingHeader from '../../components/Landing/LandingHeader';
import Introduction from '../../components/Landing/Introduction';
import Projects from '../../components/Landing/Projects';

import landingData from '../../data/landing.json';

const classes = new BEMHelper({
  name: 'landing',
  prefix: 'v-',
});

export default class Landing extends Component {
  render() {
    const { children } = this.props;

    const socialLinks = landingData.socialLinks;
    const projects = landingData.projects;
    const about = landingData.about;

    return (
      <div { ...classes('', '', 'container') }>
        <LandingHeader links={ socialLinks } />
        <Introduction paragraph={ about } />
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
