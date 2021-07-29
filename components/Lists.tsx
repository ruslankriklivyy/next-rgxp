import React from 'react';

import styles from '../styles/lists.module.scss';
import { ListsItem } from '../components';

export const Lists = ({ data }: any) => {
  return (
    <div className={styles.lists}>
      {data.map((item: any) => (
        <ListsItem key={item.id} {...item} />
      ))}
    </div>
  );
};
