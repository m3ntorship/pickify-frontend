import React from 'react';
import type { FC, ReactElement } from 'react';
import type { ITextPoll } from './ITextPoll';
import styles from './TextPoll.module.css';

const TextPoll: FC<ITextPoll.IProps> = (): ReactElement => {
  // the VARIANS are 1- the letter [A,B,C] 2- the choice or the option text
  // 3- if it was chossen then show span (correct sign)
  // 4- show the presentage of all  the choice in the right side of the div
  // 5- show a different background for the choices
  // 5- show a different background for the winner choices
  // 5- show the presentage for the winner choices in a white bolder text
  // 5-  show an icon next to the precentage for the winner choice

  return (
    <div className={styles['container-asd']}>
      <div>
        <span className={styles.letter}>A</span>
        <p className={styles.text}>OPTION 1</p>
        <span />
      </div>
      <div>
        <span />
        <span />
      </div>
    </div>
  );
};
export default TextPoll;
