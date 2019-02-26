import React from 'react';
import styles from './App.module.scss';

import {Title} from '../../components';

export default function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Header}>
        <div className={styles.Name}>
          <div className={styles.First}>
            <Title>Chris</Title>
          </div>
          <div className={styles.Second}>
            <Title>Bolton</Title>
          </div>
        </div>
        <div className={styles.Links}>
          <ul>
            <li>
              <a href="mailto:hello@cbolton.net" target="_blank">
                Email
              </a>
            </li>
            <li>
              <a href="http://medium.com/@cbolton97" target="_blank">
                Medium
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/cbolton97/" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="http://github.com/cbolton97" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.BreakContainer}>
        <div className={styles.Break}>
          <h1>About</h1>
          <p>
            A software developer by trade and a culture design nerd in practice, I love building
            amazing experiences on and off the internet. Seeing the impact of those experiences
            makes it all worthwhile.
          </p>
          <p>I like to build in JavaScript / TypeScript / React / GraphQL.</p>
        </div>
        <div className={styles.Break}>
          <h1>Experience</h1>
        </div>
        <div className={styles.Break}>
          <h1>Projects</h1>
        </div>
        <div className={styles.Break}>
          <h1>Community</h1>
        </div>
      </div>
    </div>
  );
}
