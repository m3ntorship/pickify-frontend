import React from 'react';
import { EPostType } from '../../../types/postFeed/EPostType';
import ImagePoll from '../../icons/imagePoll.svg';
import TextPoll from '../../icons/textPoll.svg';
import MiniSurvey from '../../icons/miniSurvey.svg';
import styles from '../../atoms/Tab/Tab.module.css';
import type { ITabGroup } from './ITabGroup';

export const postCreationTabGroupData = (): ITabGroup.ITabGroupData[] => {
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

export const profileTabGroupData = (): ITabGroup.ITabGroupData[] => {
  return [
    {
      id: '1',
      value: 'posts',
    },
    {
      id: '2',
      value: 'votes',
    },
  ];
};
export const CreditsTabGroupData = (): ITabGroup.ITabGroupData[] => {
  return [
    {
      id: '1',
      value: 'Front-end',
    },
    {
      id: '2',
      value: 'Back-end',
    },
    {
      id: '3',
      value: 'Mentors',
    },
  ];
};
