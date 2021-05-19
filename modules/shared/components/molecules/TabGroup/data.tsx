import React from 'react';
import ImagePoll from '../../icons/imagePoll.svg';
import TextPoll from '../../icons/textPoll.svg';
import MiniSurvey from '../../icons/miniSurvey.svg';
import type { ITabGroup } from './types/ITabGroup';

export const tabGroupData = (): ITabGroup.ITabGroupData[] => {
  return [
    {
      id: '1',
      svg: <ImagePoll className="mr-xs ml-xs" />,
      children: 'Image Poll',
      value: 'checked',
    },
    {
      id: '2',
      svg: <TextPoll className="mr-xs ml-xs" />,
      children: 'Text Poll',
      value: 'not-checked',
    },
    {
      id: '3',
      svg: <MiniSurvey className="mr-xs ml-xs" />,
      children: 'Mini survey',
      value: 'not-checked',
    },
  ];
};
