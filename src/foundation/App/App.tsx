import React from 'react';
import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.Header}>
        <span className={styles.First}>Chris</span>
        <span className={styles.Second}>
          Bo<span className={styles.Spinny}>l</span>ton
        </span>
      </h1>
    </div>
  );
}
