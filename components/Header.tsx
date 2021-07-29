import Link from 'next/link';
import React from 'react';
import styles from '../styles/header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">Next RGXP</Link>
    </header>
  );
};
