import React from 'react';
import styles from './Projects.module.scss';

import {Project, Props as ProjectProps} from './components';

interface Props {
  projects: ProjectProps[];
}

export default function Projects({projects}: Props) {
  return (
    <section>
      <h2 className="visually-hidden">My Projects</h2>
      <div className={styles.Projects}>
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
