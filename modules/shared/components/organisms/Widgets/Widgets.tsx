import type { FC, ReactElement } from 'react';
import React from 'react';
import DeveloperPics from '../../molecules/DeveloperPics/DeveloperPics';
import FriendSuggestions from '../FriendSuggestions/FriendSuggestions';
import TrendingQuestions from '../TrendingQuestions/TrendingQuestions';
import style from './Widgets.module.css';

const Widgets: FC = (): ReactElement => {
  return (
    <div className="w-21xl">
      <div className={style.widget}>
        <DeveloperPics />
      </div>
      <div className={`${style.widget} mt-6`}>
        <TrendingQuestions />
      </div>
      <div className={`${style.widget} mt-6`}>
        <FriendSuggestions />
      </div>
    </div>
  );
};

export default Widgets;
