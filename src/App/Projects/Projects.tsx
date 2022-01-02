import {useState, useRef} from 'react';
import {useInView} from 'react-intersection-observer';
import styles from './Projects.module.scss';

import {Project, ProjectType} from './components';

interface Props {
  heading: string;
  projects: ProjectType[];
}

export default function Projects({heading, projects}: Props) {
  const ref = useRef(null);
  const [visibleProjects, setVisibleProjects] = useState(new Set([0]));
  const [startBlockRef, startBlockVisible] = useInView({
    root: ref.current,
    delay: 0,
    threshold: 1,
    initialInView: true,
  });
  const [endBlockRef, endBlockVisible] = useInView({
    root: ref.current,
    delay: 150,
    threshold: 1,
    initialInView: true,
  });

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

  const showStartBorder = !startBlockVisible;
  const showEndBorder = !endBlockVisible;
  const className = [
    styles.Projects,
    showStartBorder ? styles.withStartBorder : undefined,
    showEndBorder ? styles.withEndBorder : undefined,
  ].join(' ');

  return (
    <section className={styles.Container}>
      <h2 className={styles.Heading}>{heading}</h2>
      <div ref={ref} className={className}>
        <div ref={startBlockRef} />
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
        <div ref={endBlockRef} className={styles.MobileEndSpacer} />
      </div>
    </section>
  );
}
