import React from 'react';
import type { FC, ReactElement } from 'react';
import ImagePoll from '../../icons/imagePoll.svg';
import TextPoll from '../../icons/textPoll.svg';
import MiniSurvey from '../../icons/miniSurvey.svg';
import type { ITrendingQuestion } from './ITrendingQuestion';
import styles from './TrendingQuestion.module.css';
import UserInfo from '../UserInfo/UserInfo';

export const truncate = (str: string): string => {
  const limit = 30;
  return str.length > limit ? `${str.substr(0, limit - 1)}...` : str;
};

const TrendingQuestion: FC<ITrendingQuestion.IProps> = ({
  postCaption,
  type,
}): ReactElement => {
  return (
    // <div className="flex">
    //   <div className={styles['trending-question']}>
    //     {type === 'Mini Survey' && <MiniSurvey />}
    //     {type === 'Text Poll' && <TextPoll />}
    //     {type === 'Image Poll' && <ImagePoll />}
    //   </div>
    //   <div className="w-60">
    //     <div className="flex">
    //       <Link href="/">
    //         <a>{truncate(postCaption)}</a>
    //       </Link>
    //     </div>
    //     <p className="text-xs text-dark-grey font-light">{type}</p>
    //   </div>
    // </div>

    <UserInfo
      title={postCaption}
      subTitle={type}
      variant="icon"
      isHidden={false}
    >
      <div className={styles['trending-question']}>
        {type === 'Mini Survey' && <MiniSurvey />}
        {type === 'Text Poll' && <TextPoll />}
        {type === 'Image Poll' && <ImagePoll />}
      </div>
    </UserInfo>
  );
};

export default TrendingQuestion;
