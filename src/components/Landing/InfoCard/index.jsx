import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';

const InfoCard = ({ small, details }) => {

  const classes = new BEMHelper({
    name: 'info-card',
    prefix: 'c-',
  });

  return (
    <div { ...classes('', small ? 'small' : '') }>
      <h2 { ...classes('title') }>
        {details.title}
        <span { ...classes('title', 'year') }>{details.year}</span>
      </h2>
      <p { ...classes('description') }>{details.description}</p>
      <div { ...classes('cta') }>
        <a href={ details.ctaUrl } target='_blank'>{ details.ctaText }</a>
      </div>
    </div>
  );
}
InfoCard.propTypes = {
  small: React.PropTypes.bool,
  details: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    year: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    ctaText: React.PropTypes.string,
    ctaUrl: React.PropTypes.string,
  }).isRequired,
};

export default InfoCard;
