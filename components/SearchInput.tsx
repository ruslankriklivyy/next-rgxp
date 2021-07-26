import React from 'react';
import styles from '../styles/searchInput.module.scss';

export const SearchInput = () => {
  return <input className={styles.searchInput} type="text" placeholder="Поиск..." />;
};
