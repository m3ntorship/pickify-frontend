import React from 'react';
import { EPostType } from '../../../types/postFeed/EPostType';
import ImagePoll from '../../icons/imagePoll.svg';
import TextPoll from '../../icons/textPoll.svg';
import MiniSurvey from '../../icons/miniSurvey.svg';
import styles from '../../atoms/Tab/Tab.module.css';
import type { ITabGroup } from './ITabGroup';

export const tabGroupData = (): ITabGroup.ITabGroupData[] => {
  return [
    {
      id: '1',
      svg: <ImagePoll className={styles.icon} data-testid="image-poll-icon" />,
      value: 'Image Poll',
      postType: EPostType.ImagePoll,
    },
    {
      id: '2',
      svg: <TextPoll className={styles.icon} />,
      value: 'Text Poll',
      postType: EPostType.TextPoll,
    },
    {
      id: '3',
      svg: <MiniSurvey className={styles.icon} />,
      value: 'Mini Survey',
      postType: EPostType.MiniSurvey,
    },
  ];
};
