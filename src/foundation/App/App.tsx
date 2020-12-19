import React from 'react';
import styles from './App.module.scss';

import {Header, Projects} from '../../components';

import projectData from '../../data/projects.json';

export default function App() {
  return (
    <div className={styles.App}>
      <Header
        marquee={['chrisbolton', 'cbolton.net']}
        subheading={{
          description: 'Building on and off the internet.',
          links: [
            {label: 'Work', url: 'https://www.linkedin.com/in/cboltt'},
            {
              label: 'Writing',
              url: 'http://medium.com/@cboltt'
            },
            {
              label: 'Code',
              url: 'http://github.com/cboltt'
            }
          ]
        }}
      />
      <div className={styles.Section}>
        <h2 className={styles.Heading}>Projects</h2>
        <Projects projects={projectData} />
      </div>
    </div>
  );
}
