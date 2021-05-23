import React from 'react';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import type { ITextPoll } from './ITextPoll';
import styles from './TextPoll.module.css';
import Check from '../../icons/checkMarkDefault.svg';

const TextPoll: FC<ITextPoll.IProps> = ({
  letter = 'A',
  option = 'option one',
  precentage,
  chceked = false,
  winner = false,
}): ReactElement => {
  // the VARIANS are 1- the letter [A,B,C] 2- the choice or the option text
  // 3- if it was chossen then show span (correct sign)
  // 4- show the presentage of all  the choice in the right side of the div
  // 5- show a different background for the choices
  // 5- show a different background for the winner choices
  // 5- show the presentage for the winner choices in a white bolder text
  // 5-  show an icon next to the precentage for the winner choice

  const textPoll = classNames(styles['container-asd'], {
    [styles.winner]: chceked && winner,
    [styles.looser]: chceked && !winner,
  });

  return (
    <div className={textPoll}>
      <div className={styles['flex-container']}>
        <span className={styles.letter}>{letter}</span>
        <p className={styles.option}> {option} </p>
        <span />
        {chceked && (
          <span className={styles['svg-check']}>
            <Check />
          </span>
        )}
      </div>
      {chceked && (
        <div className={styles.precentage}>
          <span>{precentage}%</span>
        </div>
      )}
    </div>
  );
};
export default TextPoll;
