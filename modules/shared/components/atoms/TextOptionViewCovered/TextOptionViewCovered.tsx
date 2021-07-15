import React from 'react';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import type { ITextOptionViewCovered } from './ITextOptionViewCovered';
import styles from './TextOptionViewCovered.module.css';

const TextOptionViewCovered: FC<ITextOptionViewCovered.IProps> = ({
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
        <p className={styles.option} dir="auto">
          {optionBody}
        </p>
        <span />
      </span>
    </button>
  );
};
export default TextOptionViewCovered;
