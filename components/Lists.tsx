import React from 'react';
import styles from '../styles/lists.module.scss';
import { ListsItem } from '../components';

export const Lists = () => {
  return (
    <div className={styles.lists}>
      <ListsItem />
    </div>
  );
};
