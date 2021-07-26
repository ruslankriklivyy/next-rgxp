import React from 'react';

import { SearchInput } from '../components';
import styles from '../styles/topNavigation.module.scss';

export const TopNavigation = () => {
  return (
    <div className={styles.top}>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <a href="/1">Почта</a>
          </li>
          <li className={styles.menuItem}>
            <a href="/1">Цифры</a>
          </li>
        </ul>
      </nav>
      <SearchInput />
    </div>
  );
};
