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
      active: true,
    },
    {
      id: '2',
      icon: <TextPoll className="mr-xs ml-xs" />,
      type: 'Text Poll',
      active: false,
    },
    {
      id: '3',
      icon: <MiniSurvey className="mr-xs ml-xs" />,
      type: 'Mini survey',
      active: false,
    },
  ];
};
