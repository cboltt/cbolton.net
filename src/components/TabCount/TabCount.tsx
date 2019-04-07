import React from 'react';

import styles from './TabCount.module.scss';

export default function TabCount() {
  return (
    <div className={styles.TabCount}>
      <h1 className={styles.Count}>
        <div className={styles.Spinner}>24</div>
      </h1>
      <p className={styles.Details}>
        open browser tabs on my computer at the moment.
        <br />
        Not too bad right now.
      </p>
    </div>
  );
}
