import React from 'react';
import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Header}>
        <div className={styles.Name}>
          <div className={styles.First}>
            <div className={styles.LetterBox}>
              <span className={styles.Letter} data-shadow="C">
                C
              </span>
            </div>
            <div className={styles.LetterBox}>
              <span className={styles.Letter} data-shadow="h">
                h
              </span>
            </div>
            <div className={styles.LetterBox}>
              <span className={styles.Letter} data-shadow="r">
                r
              </span>
            </div>
            <div className={styles.LetterBox}>
              <span className={styles.Letter} data-shadow="i">
                i
              </span>
            </div>
            <div className={styles.LetterBox}>
              <span className={styles.Letter} data-shadow="s">
                s
              </span>
            </div>
          </div>
          <div className={styles.Second}>
            <div className={styles.LetterBox}>
              <span className={styles.Letter} data-shadow="B">
                B
              </span>
            </div>
            <div className={styles.LetterBox}>
              <span className={styles.Letter} data-shadow="o">
                o
              </span>
            </div>
            <div className={styles.LetterBox}>
              <span className={styles.Letter} data-shadow="l">
                l
              </span>
            </div>
            <div className={styles.LetterBox}>
              <span className={styles.Letter} data-shadow="t">
                t
              </span>
            </div>
            <div className={styles.LetterBox}>
              <span className={styles.Letter} data-shadow="o">
                o
              </span>
            </div>
            <div className={styles.LetterBox}>
              <span className={styles.Letter} data-shadow="n">
                n
              </span>
            </div>
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
    </div>
  );
}
