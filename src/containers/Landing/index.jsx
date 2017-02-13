import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';
import BEMHelper from 'react-bem-helper';

import LandingHeader from '../../components/Landing/LandingHeader';
import Introduction from '../../components/Landing/Introduction';
import Projects from '../../components/Landing/Projects';

import landingData from '../../data/landing.json';

const classes = new BEMHelper({
  name: 'landing',
  prefix: 'v-',
});

class Landing extends Component {

  componentDidMount() {
    this.props.actions.requestLandingLinks();
  }

  render() {
    const {
      landingLinks
    } = this.props;

    const socialLinks = landingData.socialLinks;
    const projects = landingData.projects;
    const about = landingData.about;

    return (
      <div { ...classes('') }>
        <LandingHeader links={ landingLinks.data } />
        <Introduction paragraph={ about } />
        <Projects projectsData={ projects } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

Landing.propTypes = {
  children: React.PropTypes.node,
};
Landing.defaultProps = {
  children: '',
};
