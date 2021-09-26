import React from 'react';

import {Link} from '../../components';
import {Icon} from './components';

import styles from './Project.module.scss';

export interface Props {
  icon: string;
  color?: string;
  title: string;
  description: string;
  url: string;
  archive_url?: string;
  archived?: boolean;
  hidden?: boolean;
}

export function Project({
  hidden,
  icon,
  color,
  title,
  description,
  url,
  archived,
  archive_url,
}: Props) {
  if (hidden) {
    return null;
  }

  const hostname = new URL(url).hostname.replace('www.', '');
  const link = archived && archive_url ? archive_url : url;

  return (
    <div className={styles.Project}>
      <Icon {...{icon, color}} />
      <div className={styles.Content}>
        <h3 className={styles.Title}>{title}</h3>
        <p className={styles.Description}>{description}</p>
      </div>
      <Link label={hostname} accessibilityLabel={`Visit ${title}`} url={link} />
    </div>
  );
}
