import React from 'react';

import styles from './Project.module.scss';

type Props = {
  icon: string;
  color?: string;
  title: string;
  description: string;
  url: string;
};

export default function Project({icon, color, title, description, url}: Props) {
  return (
    <a className={styles.Project} href={url} target="_blank" rel="noopener noreferrer">
      <div className={styles.IconContainer} role="presentation">
        <div className={styles.Icon} style={{color: color ? color : 'inherit'}}>
          {icon}
        </div>
      </div>
      <div className={styles.Text}>
        <h3 className={styles.Title}>{title}</h3>
        <p className={styles.Description}>{description}</p>
      </div>
    </a>
  );
}
