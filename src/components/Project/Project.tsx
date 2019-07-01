import React from 'react';

import styles from './Project.module.scss';

type Props = {
  icon: string;
  color?: string;
  title: string;
  url: string;
};

export default function Project({icon, color, title, url}: Props) {
  return (
    <a className={styles.Project} href={url} target="_blank" rel="noopener noreferrer">
      <div className={styles.IconContainer} role="presentation">
        <div className={styles.Icon} style={{color: color ? color : 'inherit'}}>
          {icon}
        </div>
      </div>
      <h3 className={styles.Title}>{title}</h3>
    </a>
  );
}
