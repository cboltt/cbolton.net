import React from 'react';

import {Title} from './components';

import styles from './Header.module.scss';

type Props = {
  marquee: string[];
  subheading: {
    description: string;
    links: {
      label: string;
      url: string;
    }[];
  };
};

export default function Header({marquee, subheading}: Props) {
  return (
    <header className={styles.Header}>
      <div className={styles.NameBox}>
        <div className={styles.Name}>
          <div className={styles.First}>
            <Title>{marquee[0]}</Title>
          </div>
          <div className={styles.Second}>
            <Title>{marquee[1]}</Title>
          </div>
        </div>
      </div>
      <div className={styles.SubHeading}>
        <p>{subheading.description}</p>
        <ul>
          {subheading.links.map(({label, url}) => (
            <li key={url}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
