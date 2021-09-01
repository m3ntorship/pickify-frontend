import React from 'react';
import type { FC, ReactElement } from 'react';
import ImagePoll from '../../icons/imagePoll.svg';
import TextPoll from '../../icons/textPoll.svg';
import MiniSurvey from '../../icons/miniSurvey.svg';
import type { ITrendingQuestion } from './ITrendingQuestion';
import styles from './TrendingQuestion.module.css';
import ImgWithInfoDemo from '../ImgWithInfo/ImgWithInfo';

const TrendingQuestion: FC<ITrendingQuestion.IProps> = ({
  postCaption,
  type,
}): ReactElement => {
  return (
    <ImgWithInfoDemo>
      <div className="flex w-min">
        <ImgWithInfoDemo.Image
          avatarSize="medium"
          variant="filled"
          isHidden={false}
          ImageVariant="icon"
        >
          <div className={styles['trending-question']}>
            {type === 'Mini Survey' && <MiniSurvey />}
            {type === 'Text Poll' && <TextPoll />}
            {type === 'Image Poll' && <ImagePoll />}
          </div>
        </ImgWithInfoDemo.Image>
        <ImgWithInfoDemo.Info classes="max-w-13xl flex flex-col justify-between ml-4 truncate	">
          <h1 className="text-sm font-normal text-dark truncate">
            {postCaption}
          </h1>
          <p className="text-dark-grey text-xs font-light truncate">{type}</p>
        </ImgWithInfoDemo.Info>
      </div>
    </ImgWithInfoDemo>
  );
};

export default TrendingQuestion;
