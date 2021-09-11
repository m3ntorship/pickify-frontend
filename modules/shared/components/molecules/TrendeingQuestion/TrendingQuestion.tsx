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
    <ImgWithInfo>
      <>
        <ImgWithInfo.Image ImageSize="medium" ImageVariant="icon">
          <div className={styles['trending-question']}>
            {type === 'Mini Survey' && <MiniSurvey />}
            {type === 'Text Poll' && <TextPoll />}
            {type === 'Image Poll' && <ImagePoll />}
          </div>
        </ImgWithInfo.Image>
        <ImgWithInfo.Info>
          <>
            <ImgWithInfo.Info.Title
              titleSize="small"
              classes="truncate max-w-13xl"
            >
              {postCaption}
            </ImgWithInfo.Info.Title>
            <ImgWithInfo.Info.SubTitle subTitleSize="small">
              {type}
            </ImgWithInfo.Info.SubTitle>
          </>
        </ImgWithInfo.Info>
      </>
    </ImgWithInfo>
  );
};

export default TrendingQuestion;
