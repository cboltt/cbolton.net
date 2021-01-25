import React from 'react';

import {Link} from '../../components';
import {Icon} from './components';

import styles from './Project.module.scss';

interface Props {
  icon: string;
  color?: string;
  title: string;
  description: string;
  url: string;
}

export default function Project({icon, color, title, description, url}: Props) {
  const hostname = new URL(url).hostname.replace('www.', '');

  return (
    <div className={styles.Project}>
      <Icon {...{icon, color}} />
      <div className={styles.Content}>
        <h3 className={styles.Title}>{title}</h3>
        <p className={styles.Description}>{description}</p>
      </div>
      <Link label={hostname} accessibilityLabel={`Visit ${title}`} url={url} />
    </div>
  );
}
