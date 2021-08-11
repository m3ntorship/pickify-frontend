import React from 'react';
import type { FC, ReactElement } from 'react';
import Link from 'next/link';
import ImagePoll from '../../icons/imagePoll.svg';
import TextPoll from '../../icons/textPoll.svg';
import MiniSurvey from '../../icons/miniSurvey.svg';
import type { ITrendingQuestion } from './ITrendingQuestion';
import styles from './TrendingQuestion.module.css';

export const truncate = (str: string): string => {
  const limit = 30;
  return str.length > limit ? `${str.substr(0, limit - 1)}...` : str;
};

const TrendingQuestion: FC<ITrendingQuestion.IProps> = ({
  postCaption,
  type,
}): ReactElement => {
  return (
    <div className="flex overflow-hidden">
      {type === 'Mini Survey' && (
        <div className={styles['trending-question']}>
          <MiniSurvey />
        </div>
      )}
      {type === 'Text Poll' && (
        <div className={styles['trending-question']}>
          <TextPoll />
        </div>
      )}
      {type === 'Image Poll' && (
        <div className={styles['trending-question']}>
          <ImagePoll />
        </div>
      )}
      <div className="ml-4" title={postCaption}>
        <Link href="/">
          <a>{truncate(postCaption)}</a>
        </Link>
        <p className="text-xs text-dark-grey font-light">{type}</p>
      </div>
    </div>
  );
};

export default TrendingQuestion;
