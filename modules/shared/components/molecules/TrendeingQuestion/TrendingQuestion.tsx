import React from 'react';
import type { FC, ReactElement } from 'react';
import Link from 'next/link';
import ImagePoll from '../../icons/imagePoll.svg';
import TextPoll from '../../icons/textPoll.svg';
import MiniSurvey from '../../icons/miniSurvey.svg';
import type { ITrendingQuestion } from './ITrendingQuestion';

export const truncate = (str: string): string => {
  const limit = 30;
  return str.length > limit ? `${str.substr(0, limit - 1)}...` : str;
};

const TrendingQuestion: FC<ITrendingQuestion.IProps> = ({
  text,
  type,
}): ReactElement => {
  return (
    <div className="flex">
      {type === 'Mini Survey' && (
        <div className="w-10 h-10 bg-grey-shd7 flex justify-center items-center">
          <MiniSurvey />
        </div>
      )}
      {type === 'Text Poll' && (
        <div className="w-10 h-10 bg-grey-shd7 flex justify-center items-center">
          <TextPoll />
        </div>
      )}
      {type === 'Image Poll' && (
        <div className="w-10 h-10 bg-grey-shd7 flex justify-center items-center">
          <ImagePoll />
        </div>
      )}
      <div className="ml-4" title={text}>
        <Link href="#">{truncate(text)}</Link>
        <p className="text-xs text-dark-grey font-light">{type}</p>
      </div>
    </div>
  );
};

export default TrendingQuestion;
