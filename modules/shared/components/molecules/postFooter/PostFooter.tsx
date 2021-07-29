import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IPostFooter } from './IPostFooter';
import Share from '../../icons/share.svg';
import styles from './PostFooter.module.css';

const PostFooter: FC<IPostFooter.IProps> = ({
  numberOfVotes,
  showResult,
  sharePostHandler,
  postId,
}): ReactElement => {
  return (
    <div className={styles.container}>
      {!showResult && <span> Vote to uncover the total number of voters </span>}
      {showResult && <span>{numberOfVotes} votes</span>}
      <button
        type="button"
        onClick={(): void => {
          sharePostHandler(postId);
        }}
      >
        <Share />
      </button>
    </div>
  );
};

export default PostFooter;
