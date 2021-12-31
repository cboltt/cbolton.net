import React from 'react';

import {Link} from '../components';
import {Title} from './components';
import styles from './Header.module.scss';

interface Props {
  title: string;
  links: {
    label: string;
    accessibilityLabel: string;
    url: string;
  }[];
}

export default function Header({title, links}: Props) {
  return (
    <div className={styles.Container}>
      <header className={styles.Header}>
        <div className={styles.Title}>
          <Title>{title}</Title>
        </div>
        <nav className={styles.Nav} aria-label="Related sites">
          {links.map((link) => (
            <Link key={link.url} {...link} />
          ))}
        </nav>
      </header>
    </div>
  );
}
