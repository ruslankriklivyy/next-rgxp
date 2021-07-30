import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { BaseInput } from '../components';
import styles from '../styles/topNavigation.module.scss';
import { RootState } from '../store/store';
import { setSearchQuery } from '../store/slices/patternsSlice';

export const TopNavigation = React.memo(() => {
  const { searchQuery } = useSelector((state: RootState) => state.patterns);
  const dispatch = useDispatch();

  const handleInputValue = (val: string) => {
    dispatch(setSearchQuery(val));
  };

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
      <BaseInput
        placeholder="Поиск..."
        type="text"
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputValue(e.target.value)}
      />
    </div>
  );
});
