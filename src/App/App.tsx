import React from 'react';
import styles from './App.module.scss';

import {Header, Projects} from './components';

import projectData from '../data/projects.json';

export default function App() {
  return (
    <main className={styles.Main}>
      <div id="Header" className={styles.Section}>
        <Header
          title="cbolton.net"
          description="Chris Bolton's weird and wacky corner of the internet"
          links={[
            {
              label: 'Work',
              accessibilityLabel: 'View my work experience on Linkedin',
              url: 'https://www.linkedin.com/in/cboltt',
            },
            {
              label: 'Writing',
              accessibilityLabel: 'View my writing on Medium',
              url: 'http://medium.com/@cboltt',
            },
            {
              label: 'Code',
              accessibilityLabel: 'View my software projects on Github',
              url: 'http://github.com/cboltt',
            },
          ]}
          anchors={[
            {label: 'Currently', emoji: '👀', anchor: '#Currently'},
            {label: 'Projects', emoji: '🔨', anchor: '#Projects'},
            {label: 'Links', emoji: '🔗', anchor: '#Links'},
            {label: 'Contact', emoji: '💌', anchor: '#Contact'},
          ]}
        />
      </div>

      <section id="Projects" className={styles.Section}>
        <h2 className={styles.Heading}>Projects from on and off the internet</h2>
        <Projects projects={projectData} />
      </section>
    </main>
  );
}
