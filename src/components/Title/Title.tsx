import React from 'react';

import styles from './Title.module.scss';

type Props = {
  children: string;
};

export default function Title({children}: Props) {
  const lettersMarkup = children.split('').map((letter, idx) => (
    <div key={idx} className={styles.LetterBox}>
      <span className={styles.Letter} data-shadow={letter}>
        {letter}
      </span>
    </div>
  ));

  return <>{lettersMarkup}</>;
}
