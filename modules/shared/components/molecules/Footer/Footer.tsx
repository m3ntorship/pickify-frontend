import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IFooter } from './IFooter';
import Share from '../../icons/share.svg';
import styles from './Footer.module.css';

const Footer: FC<IFooter.IProps> = ({
  numberOfVotes,
  showResult = false,
  handleClick,
}): ReactElement => {
  return (
    <div className={styles.container}>
      {!showResult && <span> Vote to uncover the total number of voters </span>}
      {showResult && <span>{numberOfVotes} votes</span>}
      <button type="button" onClick={handleClick}>
        <Share />
      </button>
    </div>
  );
};

export default Footer;
