import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IFooter } from './IFooter';
import Share from '../../icons/share.svg';
import styles from './Footer.module.css';

const Footer: FC<IFooter.IProps> = ({
  numberOfVotes,
  showResult = false,
}): ReactElement => {
  return (
    <div className={styles.container}>
      {!showResult && <span> Vote to uncover the total number of voters </span>}
      {showResult && <span>{numberOfVotes} votes</span>}
      <span>
        <Share />
      </span>
    </div>
  );
};

export default Footer;
