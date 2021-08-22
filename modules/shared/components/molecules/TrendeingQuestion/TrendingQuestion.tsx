import React from 'react';
import type { FC, ReactElement } from 'react';
import ImagePoll from '../../icons/imagePoll.svg';
import TextPoll from '../../icons/textPoll.svg';
import MiniSurvey from '../../icons/miniSurvey.svg';
import type { ITrendingQuestion } from './ITrendingQuestion';
import styles from './TrendingQuestion.module.css';
import ImgWithInfo from '../ImgWithInfo/ImgWithInfo';

const TrendingQuestion: FC<ITrendingQuestion.IProps> = ({
  postCaption,
  type,
}): ReactElement => {
  return (
    <ImgWithInfo
      isHidden={false}
      variant="icon"
      title={postCaption}
      subTitle={type}
    >
      <div className={styles['trending-question']}>
        {type === 'Mini Survey' && <MiniSurvey />}
        {type === 'Text Poll' && <TextPoll />}
        {type === 'Image Poll' && <ImagePoll />}
      </div>
    </ImgWithInfo>
  );
};

export default TrendingQuestion;
