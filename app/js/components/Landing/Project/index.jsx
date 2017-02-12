import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Project extends Component {
  render() {
    const {
      title,
      description,
      ctaText,
      ctaUrl } = this.props;


    return (
      <div className='Project'>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className='cta'>
          <a href={ ctaUrl }>{ ctaText }</a>
        </div>
      </div>
    );
  }
}
Project.propTypes = {
};
