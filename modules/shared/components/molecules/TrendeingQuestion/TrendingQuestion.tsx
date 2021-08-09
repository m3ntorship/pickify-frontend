import React from 'react';
import type { FC, ReactElement } from 'react';
import Link from 'next/link';
import ImagePoll from './icons/imagePoll.svg';
import TextPoll from './icons/textPoll.svg';
import MiniSurvey from './icons/miniSurvey.svg';
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
      {type === 'Mini Survey' && <MiniSurvey />}
      {type === 'Text Poll' && <TextPoll />}
      {type === 'Image Poll' && <ImagePoll />}
      <div className="ml-4">
        <Link href="#">{truncate(text)}</Link>
        <p className="text-xs text-dark-grey font-light">{type}</p>
      </div>
    </div>
  );
};

export default TrendingQuestion;
