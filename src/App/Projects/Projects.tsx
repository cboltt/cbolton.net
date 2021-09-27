import React, {useState} from 'react';
import styles from './Projects.module.scss';

import {Project, ProjectType} from './components';

interface Props {
  projects: ProjectType[];
}

export default function Projects({projects}: Props) {
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

  return (
    <section>
      <h2 className="visually-hidden">My Projects</h2>
      <div className={styles.Projects}>
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
      </div>
    </section>
  );
}
