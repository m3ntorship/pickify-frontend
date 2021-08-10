import type { FC, ReactElement } from 'react';
import React from 'react';
import DeveloperPics from '../../molecules/DeveloperPics/DeveloperPics';
import FriendSuggestions from '../FriendSuggestions/FriendSuggestions';
import TrendingQuestions from '../TrendingQuestions/TrendingQuestions';

const Widgets: FC = (): ReactElement => {
  return (
    <div className="w-21xl">
      <div className="rounded-md p-6 bg-white hidden md:block">
        <DeveloperPics />
      </div>
      <div className="mt-6 rounded-md p-6 bg-white hidden md:block">
        <TrendingQuestions />
      </div>
      <div className="p-6 mt-6 bg-white hidden md:block">
        <FriendSuggestions />
      </div>
    </div>
  );
};

export default Widgets;
