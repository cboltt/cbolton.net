import React from 'react';
import styles from './App.module.scss';

import {Title, TabCount} from '../../components';

export default function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Header}>
        <div className={styles.NameBox}>
          <div className={styles.Name}>
            <div className={styles.First}>
              <Title>cbolton.net</Title>
            </div>
            <div className={styles.Second}>
              <Title>cbolton.net</Title>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Sections}>
        <div className={styles.Section}>
          <h1 className={styles.Title}>About</h1>
          <div className={styles.AboutContent}>
            <p>
              A software developer by trade and a culture design nerd in practice, I love building
              amazing experiences on and off the internet. Seeing the impact of those experiences
              makes it all worthwhile. Fun fact: I have <strong>24 browser tabs</strong> open on my
              laptop at the moment.
            </p>
            <p>I like to build in JavaScript / TypeScript / React / GraphQL.</p>
          </div>
        </div>
        <div className={styles.Section}>
          <h1 className={styles.Title}>Experience</h1>
        </div>
        <div className={styles.Section}>
          <h1 className={styles.Title}>Projects</h1>
        </div>
      </div>
    </div>
  );
}
