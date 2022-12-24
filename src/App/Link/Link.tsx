import React from 'react';
import styles from './Link.module.scss';

interface Props {
  label: string;
  url: string;
  accessibilityLabel?: string;
  rel?: string;
}

export default function Link({label, url, accessibilityLabel, rel}: Props) {
  const ariaLabel = accessibilityLabel ? accessibilityLabel : label;
  const relTag = rel ? rel : 'noopener noreferrer';

  return (
    <a aria-label={ariaLabel} className={styles.Link} href={url} target="_blank" rel={relTag}>
      <span className={styles.Label}>{label}</span>
    </a>
  );
}
