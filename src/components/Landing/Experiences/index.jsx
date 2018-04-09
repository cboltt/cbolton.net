import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import Masonry from 'react-masonry-component';

import InfoCard from '../InfoCard';

const Experiences = ({ experienceData }) => {

  const classes = new BEMHelper({
    name: 'experiences',
    prefix: 'c-',
  });

  const masonryOptions = {
    transitionDuration: 0,
    itemSelector: '.c-info-card',
    fitWidth: true,
  };

  const experiences = experienceData.map((experience, idx) =>
    <InfoCard key={ idx } small details={ experience } />,
  );

  return (
    <div { ...classes() }>
      <h1 { ...classes('title') }>Experience</h1>
      <Masonry
        options={ masonryOptions }
        { ...classes('masonry') }
      >
        { experiences }
      </Masonry>
    </div>
  );
}
Experiences.propTypes = {
  experienceData: React.PropTypes.array.isRequired,
};

export default Experiences;
