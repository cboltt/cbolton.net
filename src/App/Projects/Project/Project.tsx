import React from 'react';

import {Link} from '../../components';

import styles from './Project.module.scss';

type Props = {
  icon: string;
  color?: string;
  title: string;
  description: string;
  url: string;
};

export default function Project({icon, color, title, description, url}: Props) {
  const hostname = new URL(url).hostname.replace('www.', '');

  return (
    <div className={styles.Project}>
      <span className={styles.Icon} role="presentation" style={{color: color ? color : 'inherit'}}>
        {icon}
      </span>
      <div>
        <h3 className={styles.Title}>{title}</h3>
        <p className={styles.Description}>{description}</p>
        <Link label={hostname} accessibilityLabel={`Visit ${title}`} url={url} />
      </div>
    </div>
  );
}
