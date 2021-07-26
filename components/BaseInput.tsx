import React from 'react';
import styles from '../styles/searchInput.module.scss';

interface IBaseInput {
  props: React.PropsWithChildren;
}

export const BaseInput: React.FC<IBaseInput> = (props) => {
  return <input className={styles.searchInput} {...props} />;
};
