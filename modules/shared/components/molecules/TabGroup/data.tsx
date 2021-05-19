import React from 'react';
import ImagePoll from '../../icons/imagePoll.svg';
import TextPoll from '../../icons/textPoll.svg';
import MiniSurvey from '../../icons/miniSurvey.svg';
import styles from './TabGroup.module.css';
import type { ITabGroup } from './types/ITabGroup';

export const tabGroupData = (): ITabGroup.ITabGroupData[] => {
  return [
    {
      id: '1',
      svg: <ImagePoll className={styles.icon} />,
      children: 'Image Poll',
      value: 'checked',
    },
    {
      id: '2',
      svg: <TextPoll className={styles.icon} />,
      children: 'Text Poll',
      value: 'not-checked',
    },
    {
      id: '3',
      svg: <MiniSurvey className={styles.icon} />,
      children: 'Mini survey',
      value: 'not-checked',
    },
  ];
};
