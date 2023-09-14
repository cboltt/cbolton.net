import React from 'react';
import styles from './App.module.scss';

import {Header, Projects} from './components';

import headerData from '../data/header.json';
import projectData from '../data/projects.json';

export default function App() {
  return (
    <div className={styles.Page}>
      <main className={styles.App}>
        <Header {...headerData} />
        <section className={styles.Intro}>
          <p>Hey there! My name is Chris.</p>
          <p>
            Right now, I'm working at Microsoft, helping to build a faster and more fluid version of
            Teams. Previously, I was at Twitter, working in Trust and Safety engineering.
          </p>
          <p>
            I'm eager to use my skills to build inclusive and meaningful experiences, on and off the
            web. You can reach me directly at <strong>cb@cbolton.net</strong>.
          </p>
        </section>
        {/* <section className={styles.Visual}>
          <svg
            className={styles.Background}
            viewBox="0 0 789 517"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.705 263.88C4.743 228.664-1.837 190 6.881 150.228 33.744 27.683 138.117-15.939 320 19.362c272.825 52.952 484.708 103.96 464.309 238.536-20.398 134.576-165.985 221.421-266.332 241.35-100.348 19.928-426.854 34.23-428.193-81.194-1.338-115.423-80.29-99.968-84.079-154.174Z"
              stroke="#00F"
              strokeWidth="3px"
            />
          </svg>
        </section> */}
        <Projects heading="Writing" projects={projectData.reflections} />
        <Projects heading="Projects" projects={projectData.projects} />
        <Projects heading="Teams" projects={projectData.teams} />
      </main>
      <footer>
        <p className={styles.Footer}>
          Thanks for reading!
          {/* <span role="presentation"> ❤️</span> */}
        </p>
      </footer>
    </div>
  );
}
