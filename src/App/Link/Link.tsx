import React from 'react';
import styles from './Link.module.scss';

interface Props {
  label: string;
  url: string;
  accessibilityLabel?: string;
}

export default function Link({label, url, accessibilityLabel}: Props) {
  const ariaLabel = accessibilityLabel ? accessibilityLabel : label;

  return (
    <a
      aria-label={ariaLabel}
      className={styles.Link}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.Label}>{label}</span>
    </a>
  );
}
