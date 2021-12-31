import React, {useState} from 'react';
import styles from './Projects.module.scss';

import {Project, ProjectType} from './components';

interface Props {
  heading: string;
  projects: ProjectType[];
}

export default function Projects({heading, projects}: Props) {
  const [visibleProjects, setVisibleProjects] = useState(new Set([0]));

  const handleOnVisible = (project: number) => {
    const projects = new Set(visibleProjects);
    projects.add(project);
    setVisibleProjects(projects);
  };

  const handleOnNotVisible = (project: number) => {
    const projects = new Set(visibleProjects);
    projects.delete(project);
    setVisibleProjects(projects);
  };

  const highlightedProject = Math.min(...Array.from(visibleProjects));

  const showBorder = projects.length > 3;
  const className = [styles.Projects, showBorder ? styles.withBorder : undefined].join(' ');

  return (
    <section className={styles.Container}>
      <h2 className={styles.Heading}>{heading}</h2>
      <div className={className}>
        <div />
        {projects.map((project, index) => {
          return (
            <Project
              key={project.title}
              index={index}
              project={project}
              highlighted={index === highlightedProject}
              onVisible={handleOnVisible}
              onNotVisible={handleOnNotVisible}
            />
          );
        })}
        <div className={styles.EndBlock} />
      </div>
    </section>
  );
}
