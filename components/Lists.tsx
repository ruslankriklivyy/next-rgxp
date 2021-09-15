import React from 'react';

import styles from '../styles/lists.module.scss';
import { ListsItem } from '../components';
import { IListPattern } from '../interfaces';

interface IList {
  data: IListPattern[];
}

export const Lists: React.FC<IList> = ({ data }) => {
  return (
    <div className={styles.lists}>
      {data.map((item) => (
        <ListsItem key={item.id} {...item} />
      ))}
    </div>
  );
};
