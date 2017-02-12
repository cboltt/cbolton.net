import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'project',
  prefix: 'c-',
});


export default class Project extends Component {
  render() {
    const { details } = this.props;

    return (
      <div { ...classes() }>
        <h2 { ...classes('title') }>{details.title}</h2>
        <p { ...classes('description') }>{details.description}</p>
        <div { ...classes('cta') }>
          <a href={ details.ctaUrl }>{ details.ctaText }</a>
        </div>
      </div>
    );
  }
}
Project.propTypes = {
  details: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    ctaText: React.PropTypes.string.isRequired,
    ctaUrl: React.PropTypes.string.isRequired,
  }).isRequired,
};
