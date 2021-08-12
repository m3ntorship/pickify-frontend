import { useRouter } from 'next/router';
import type { FC, ReactElement } from 'react';
import React from 'react';
import DeveloperPics from '../../molecules/DeveloperPics/DeveloperPics';
import Footer from '../../molecules/Footer/Footer';
import FriendSuggestions from '../FriendSuggestions/FriendSuggestions';
import TrendingQuestions from '../TrendingQuestions/TrendingQuestions';
import style from './Widgets.module.css';

const Widgets: FC = (): ReactElement => {
  const { pathname } = useRouter();
  const showFriendSuggestions = pathname === '/';
  return (
    <div>
      <div className={style.widget}>
        <DeveloperPics />
      </div>
      <div className={style.widget}>
        <TrendingQuestions />
      </div>
      {showFriendSuggestions && (
        <div className={style.widget}>
          <FriendSuggestions />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Widgets;
