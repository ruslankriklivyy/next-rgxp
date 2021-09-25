import React from 'react';

import styles from '../styles/lists.module.scss';
import { IListPattern } from '../interfaces';
import { ListsItem } from './ListsItem';

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
