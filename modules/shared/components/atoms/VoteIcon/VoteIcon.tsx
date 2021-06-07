import type { ReactElement, FC } from 'react';
import React from 'react';
import type { IVoteIcon } from './IVoteIcon';
import FilledHeartIcon from '../../icons/filledHeart.svg';
import FilledDislikeIcon from '../../icons/filledDislike.svg';
import FilledLikeIcon from '../../icons/filledLike.svg';
import styles from './VoteIcon.module.css';

const VoteIcon: FC<IVoteIcon.IProps> = ({ isOneImageVote }): ReactElement => {
  return (
    <div className="flex justify-end">
      {!isOneImageVote && (
        <button type="button" className={`${styles.love} group`}>
          <FilledHeartIcon className="fill-primary stroke-current stroke-2 text-white group-hover:fill-white" />
        </button>
      )}
      {isOneImageVote && (
        <div className="flex">
          <button type="button" className={`${styles.dislike} group`}>
            <FilledDislikeIcon className="fill-error stroke-current stroke-1 text-white group-hover:fill-white" />
          </button>
          <button type="button" className={`${styles.like} group`}>
            <FilledLikeIcon className="fill-primary stroke-current stroke-1 text-white group-hover:fill-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default VoteIcon;
