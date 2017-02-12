import React, { Component } from 'react';
import { Link } from 'react-router';

import Project from '../Project';

export default class Projects extends Component {
  render() {
    const { projectsData } = this.props;

    const projects = projectsData.map((project, idx) =>
      <Project key={ idx } { ...project } />,
    );
    return (
      <div className='Projects'>
        <h1>Projects</h1>
        { projects }
      </div>
    );
  }
}
Projects.propTypes = {
};
