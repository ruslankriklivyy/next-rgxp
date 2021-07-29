import React from 'react';
import Link from 'next/link';

import { BaseInput } from '../components';
import styles from '../styles/topNavigation.module.scss';

export const TopNavigation = () => {
  const menuArr = [
    { id: 0, ru: 'Почта', en: 'mail' },
    { id: 1, ru: 'Цифры', en: 'numbers' },
    { id: 2, ru: 'Разное', en: 'other' },
  ];

  return (
    <div className={styles.top}>
      <nav>
        <ul className={styles.menu}>
          {menuArr.map((item, index) => (
            <li key={index} className={styles.menuItem}>
              <Link href={`/${item.en}`}>{item.ru}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <BaseInput placeholder="Поиск..." type="text" />
    </div>
  );
};
