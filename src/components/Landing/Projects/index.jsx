import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import Masonry from 'react-masonry-component';

import Project from '../Project';

const Projects = ({ projectsData }) => {

  const classes = new BEMHelper({
    name: 'projects',
    prefix: 'c-',
  });

  const masonryOptions = {
    transitionDuration: 0,
    itemSelector: '.c-project',
    fitWidth: true,
  };

  const projects = projectsData.map((project, idx) =>
    <Project key={ idx } details={ project } />,
  );

  return (
    <div { ...classes() }>
      <h1 { ...classes('title') }>Projects</h1>
      <Masonry
        options={ masonryOptions }
        { ...classes('masonry') }
      >
        { projects }
      </Masonry>
    </div>
  );
}
Projects.propTypes = {
  projectsData: React.PropTypes.array.isRequired,
};

export default Projects;
