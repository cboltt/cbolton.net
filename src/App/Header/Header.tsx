import React from 'react';

import {Link} from '../components';
import {Title} from './components';
import styles from './Header.module.scss';

type Props = {
  title: string;
  description: string;
  links: {label: string; accessibilityLabel: string; url: string}[];
  anchors: {
    emoji: string;
    label: string;
    anchor: string;
  }[];
};

export default function Header({title, links}: Props) {
  return (
    <header className={styles.Header}>
      <div className={styles.Title}>
        <Title>{title}</Title>
      </div>
      <nav className={styles.Nav} aria-label="Related sites">
        {links.map((link) => (
          <Link {...link} />
        ))}
      </nav>
    </header>
  );
}
