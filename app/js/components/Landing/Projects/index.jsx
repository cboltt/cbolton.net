import React, { Component } from 'react';
import { Link } from 'react-router';
import BEMHelper from 'react-bem-helper';

import Project from '../Project';

const classes = new BEMHelper({
  name: 'projects',
  prefix: 'c-',
});

export default class Projects extends Component {
  render() {
    const { projectsData } = this.props;

    const projects = projectsData.map((project, idx) =>
      <Project key={ idx } details={ project } />,
    );
    return (
      <div { ...classes() }>
        { projects }
      </div>
    );
  }
}
Projects.propTypes = {
  projectsData: React.PropTypes.array.isRequired,
};
