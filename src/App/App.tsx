import React from 'react';
import styles from './App.module.scss';

import {Header, Projects} from './components';

import headerData from '../data/header.json';
import projectData from '../data/projects.json';

export default function App() {
  return (
    <main className={styles.App}>
      <Header {...headerData} />
      <Projects projects={projectData} />
    </main>
  );
}
