import { useRouter } from 'next/router';
import type { FC, ReactElement, MutableRefObject } from 'react';
import React, { useEffect, useRef } from 'react';
import styles from './Widgets.module.css';
import DeveloperPics from '../../molecules/DeveloperPics/DeveloperPics';
import Footer from '../../molecules/Footer/Footer';
import FriendSuggestions from '../FriendSuggestions/FriendSuggestions';
import TrendingQuestions from '../TrendingQuestions/TrendingQuestions';

const Widgets: FC = (): ReactElement => {
  const widgets = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    widgets.current.style.height = `${window.innerHeight - 68}px`;
  }, []);

  const { pathname } = useRouter();
  const showFriendSuggestions = pathname === '/';
  return (
    <div className={styles['fixed-widgets']} ref={widgets}>
      <div className="mb-6">
        <DeveloperPics />
      </div>
      <div className="mb-6">
        <TrendingQuestions />
      </div>
      {showFriendSuggestions && (
        <div className="mb-6">
          <FriendSuggestions />
        </div>
      )}
      <Footer showCenteredLogo={false} />
    </div>
  );
};

export default Widgets;
