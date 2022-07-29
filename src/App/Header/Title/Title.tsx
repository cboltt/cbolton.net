import React from 'react';

import styles from './Title.module.scss';

interface Props {
  children: string;
}

export default function Title({children}: Props) {
  const lettersMarkup = children.split('').map((letter, index) => (
    <span key={`${letter}-${index}`} className={styles.Letter} data-shadow={letter}>
      {letter}
    </span>
  ));

  return (
    <>
      <h1 className="visually-hidden">{children}</h1>
      <div className={styles.Title} role="presentation" aria-hidden="true">
        <div className={styles.Row}>{lettersMarkup}</div>
        <div className={styles.Row}>{lettersMarkup}</div>
        <div className={styles.Row}>{lettersMarkup}</div>
      </div>
    </>
  );
}
