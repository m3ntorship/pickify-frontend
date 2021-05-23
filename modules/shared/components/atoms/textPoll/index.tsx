import React from 'react';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import type { ITextPoll } from './ITextPoll';
import styles from './TextPoll.module.css';
import Check from '../../icons/checkMarkDefault.svg';

const TextPoll: FC<ITextPoll.IProps> = ({
  letter = 'A',
  option = 'option one',
  percentage,
  isChecked = false,
  mostVoted = false,
  showResult,
  id,
  onOptionClick,
}): ReactElement => {
  console.log(onOptionClick);

  const textPoll = classNames(styles.btnBody, {
    [styles.mostVoted]: showResult && mostVoted,
    [styles.leastVoted]: showResult && !mostVoted,
  });
  const svgClasses = classNames({
    [styles.svgDark]: !mostVoted,
    [styles.svgWhite]: mostVoted,
  });

  return (
    <button
      type="button"
      id={id}
      data-testid={id}
      className={textPoll}
      onClick={onOptionClick}
      disabled={showResult}
    >
      <span className={styles['flex-container']}>
        {letter && <span className={styles.letter}>{letter}</span>}
        <p className={styles.option}> {option} </p>
        <span />
        {isChecked && (
          <span className={styles['svg-check']}>
            <Check className={svgClasses} />
          </span>
        )}
      </span>
      {showResult && (
        <span className={styles.percentage}>
          {mostVoted ? '🌟' : ''}
          {percentage}%
        </span>
      )}
    </button>
  );
};
export default TextPoll;
