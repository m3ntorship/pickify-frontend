import React, { useState } from 'react';
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
  const [copied, setCopied] = useState(false);
  return (
    <div className={styles.container}>
      {!showResult && <span> Vote to uncover the total number of voters </span>}
      {showResult && <span>{numberOfVotes} votes</span>}
      {copied ? (
        <div className="h-l">
          <span>Copied</span>
        </div>
      ) : (
        <button
          type="button"
          data-testid="share-button-icon"
          onClick={(): void => {
            sharePostHandler(postId, setCopied, copied);
          }}
        >
          <Share />
        </button>
      )}
    </div>
  );
};

export default PostFooter;
