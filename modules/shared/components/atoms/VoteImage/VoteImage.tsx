import type { ReactElement, FC } from 'react';
import React from 'react';
import type { IVoteImage } from './IVoteImage';
import OutlinedHeartIcon from '../../icons/outlinedHeart.svg';
import FilledHeartIcon from '../../icons/filledHeart.svg';
import OutlinedDislikeIcon from '../../icons/outlinedDislike.svg';
import OutlinedLikeIcon from '../../icons/outlinedLike.svg';
import FilledLikeIcon from '../../icons/filledLike.svg';
import styles from './VoteImage.module.css';

const VoteImage: FC<IVoteImage.IProps> = ({ oneImage }): ReactElement => {
  return (
    <div className="relative">
      <div>
        {oneImage ? (
          <button type="button" className={`${styles.love} group`}>
            <OutlinedHeartIcon className="group-hover:hidden" />
            <FilledHeartIcon className="group-hover:block hidden" />
          </button>
        ) : (
          <div className="flex">
            <button type="button" className={`${styles.dislike} group`}>
              <OutlinedDislikeIcon />
            </button>
            <button type="button" className={`${styles.like} group`}>
              <OutlinedLikeIcon className="group-hover:hidden" />
              <FilledLikeIcon className="group-hover:block hidden" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoteImage;
