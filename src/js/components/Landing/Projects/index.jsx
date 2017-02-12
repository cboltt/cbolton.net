import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import Masonry from 'react-masonry-component';

import Project from '../Project';

const classes = new BEMHelper({
  name: 'projects',
  prefix: 'c-',
});

const masonryOptions = {
  transitionDuration: 0,
  itemSelector: '.c-project',
  fitWidth: true,
};

export default class Projects extends Component {
  render() {
    const { projectsData } = this.props;

    const projects = projectsData.map((project, idx) =>
      <Project key={ idx } details={ project } />,
    );
    return (
      <div className='c-projects-container'>
        <Masonry
          options={ masonryOptions }
          { ...classes() }
        >
          { projects }
        </Masonry>
      </div>
    );
  }
}
Projects.propTypes = {
  projectsData: React.PropTypes.array.isRequired,
};
