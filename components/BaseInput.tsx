import React from 'react';
import styles from '../styles/searchInput.module.scss';

interface IBaseInput {
  type: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

export const BaseInput: React.FC<IBaseInput> = ({
  type,
  placeholder,
  value,
  defaultValue,
  readOnly,
  onChange,
  onClick,
}) => {
  return (
    <input
      className={styles.searchInput}
      type={type}
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      defaultValue={defaultValue}
      onChange={onChange}
      onClick={onClick}
    />
  );
};
