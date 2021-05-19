import React from 'react';
import ImagePoll from '../../icons/imagePoll.svg';
import TextPoll from '../../icons/textPoll.svg';
import MiniSurvey from '../../icons/miniSurvey.svg';
import type { ITabGroup } from './types/ITabGroup';

export const tabGroupData = (): ITabGroup.ITabGroupData[] => {
  return [
    {
      id: '1',
      icon: <ImagePoll className="mr-xs ml-xs" />,
      type: 'Image Poll',
      value: 'checked',
    },
    {
      id: '2',
      icon: <TextPoll className="mr-xs ml-xs" />,
      type: 'Text Poll',
      value: 'not-checked',
    },
    {
      id: '3',
      icon: <MiniSurvey className="mr-xs ml-xs" />,
      type: 'Mini survey',
      value: 'not-checked',
    },
  ];
};
