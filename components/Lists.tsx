import React from 'react';
import styles from '../styles/lists.module.scss';

export const Lists = () => {
  return (
    <div className={styles.lists}>
      <div className={styles.listsItem}>
        <div className={styles.itemTop}>
          <h4 className={styles.itemName}>E-mail format</h4>
          <div className={styles.itemInfo}></div>
        </div>
      </div>
    </div>
  );
};
