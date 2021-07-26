import React from 'react';
import styles from '../styles/header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/1" className={styles.name}>
        Next RGXP
      </a>
    </header>
  );
};
