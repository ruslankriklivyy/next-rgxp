import React from 'react';
import Image from 'next/image';

import styles from '../styles/lists.module.scss';
import okSvg from '../assets/img/ok.svg';
import checkSvg from '../assets/img/check.svg';
import nocheckSvg from '../assets/img/cancel.svg';
import infoSvg from '../assets/img/info.svg';
import { IListItemTitleAndDescr } from '../interfaces';
import { useDispatch } from 'react-redux';
import { setPatternsItemsByType } from '../store/slices/patternsSlice';
import { BaseInput } from './BaseInput';

interface IListItem {
  title: IListItemTitleAndDescr;
  description: IListItemTitleAndDescr;
  pattern: string;
  placeholder: string;
  tags: string[];
}

export const ListsItem: React.FC<IListItem> = ({
  title,
  description,
  pattern,
  placeholder,
  tags,
}) => {
  const [copyStatus, setCopyStatus] = React.useState(false);
  const [validateValue, setValidateValue] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const listItemRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleOutsideClick = React.useCallback((e: any) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(listItemRef.current)) {
      setCopyStatus(false);
    }
  }, []);

  const onSetCopy = () => {
    navigator.clipboard.writeText(pattern.replace(/(\/\/)/gm, '/'));
    setCopyStatus(true);
  };

  const handleInputValue = (value: string) => {
    const newPatter = pattern.replace(/(\/\/)/gm, '/');
    const flagMatch = newPatter.match('/([gimy]{1,4})$');
    const flag = flagMatch ? flagMatch?.[1] : null;
    let patternValue = flag ? newPatter.replace(flag, '') : newPatter;
    if (patternValue[0] === '/' && patternValue[patternValue.length - 1] === '/') {
      patternValue = patternValue.slice(1).slice(0, -1);
    }
    const exp = new RegExp(patternValue, flag || '');
    const matches = value.match(exp);
    const check = [...(matches || [])].filter((v) => v);
    if (check.length !== 0) {
      setValidateValue(true);
    } else {
      setValidateValue(false);
    }
    setInputValue(value);
  };

  const selectPatternType = (type: string) => {
    dispatch(setPatternsItemsByType(type));
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div className={styles.listsItem} ref={listItemRef}>
      <div className={styles.itemTop}>
        <h4 className={styles.itemName}>{title.en}</h4>
        <div className={styles.itemInfo}>
          <Image src={infoSvg} alt="info svg" />
          <div className={styles.itemAbout}>{description.en}</div>
        </div>
      </div>
      <hr className={styles.itemLine} />
      <div className={styles.itemBox}>
        {copyStatus && (
          <div className={styles.itemCopy}>
            <Image src={okSvg} alt="okSvg" /> <span>You copied!</span>
          </div>
        )}
        <div className={styles.itemInputCopy}>
          <BaseInput
            onClick={onSetCopy}
            defaultValue={pattern.replace(/(\/\/)/gm, '/')}
            type="text"
            readOnly
          />
        </div>
        <div className={styles.itemCheck}>
          {inputValue && (
            <div className={styles.showValidate}>
              {validateValue ? (
                <div className={styles.validateTrue}>
                  <Image src={checkSvg} alt="check svg" />
                </div>
              ) : (
                <div className={styles.validateFalse}>
                  <Image src={nocheckSvg} alt="nocheck svg" />
                </div>
              )}
            </div>
          )}
          <BaseInput
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputValue(e.target.value)}
          />
        </div>
        <div className={styles.tags}>
          {tags.map((tag: string) => (
            <button onClick={() => selectPatternType(tag)} key={tag}>
              {tag}
            </button>
          ))}
        </div>
        {validateValue && <div className={styles.itemValidateCorrect}>{inputValue}</div>}
      </div>
    </div>
  );
};
