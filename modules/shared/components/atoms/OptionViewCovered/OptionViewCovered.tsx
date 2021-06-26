import React from 'react';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import type { IOptionViewCovered } from './IOptionViewCovered';
import styles from './OptionViewCovered.module.css';

const OptionViewCovered: FC<IOptionViewCovered.IProps> = ({
  letter,
  optionBody,
  id,
  onOptionClick,
}): ReactElement => {
  const textPoll = classNames(styles.btnBody);

  return (
    <button
      type="button"
      id={id}
      data-testid={id}
      className={textPoll}
      onClick={onOptionClick}
      disabled={false}
    >
      <span className={styles['flex-container']}>
        {letter && <span className={styles.letter}>{letter}</span>}
        <p className={styles.option}> {optionBody} </p>
        <span />
      </span>
    </button>
  );
};
export default OptionViewCovered;
