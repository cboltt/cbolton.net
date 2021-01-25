import React from 'react';
import styles from './Projects.module.scss';

import {Project} from './components';

interface Props {
  projects: {
    icon: string;
    title: string;
    description: string;
    url: string;
    color?: string;
  }[];
}

export default function Projects({projects}: Props) {
  return (
    <section className={styles.Projects}>
      <h2 className="visually-hidden">My projects</h2>

      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </section>
  );
}
