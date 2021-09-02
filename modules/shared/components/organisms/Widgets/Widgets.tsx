import { useRouter } from 'next/router';
import type { FC, ReactElement } from 'react';
import React from 'react';
import DeveloperPics from '../../molecules/DeveloperPics/DeveloperPics';
import Footer from '../../molecules/Footer/Footer';
import FriendSuggestions from '../FriendSuggestions/FriendSuggestions';
import TrendingQuestions from '../TrendingQuestions/TrendingQuestions';

const Widgets: FC = (): ReactElement => {
  const { pathname } = useRouter();
  const showFriendSuggestions = pathname === '/';
  const showDeveloperPicsAndFooter = !pathname.includes('profile');
  return (
    <div>
      {showDeveloperPicsAndFooter && (
        <div className="mb-6">
          <DeveloperPics />
        </div>
      )}
      <div className="mb-6">
        <TrendingQuestions />
      </div>
      {showFriendSuggestions && (
        <div className="mb-6">
          <FriendSuggestions />
        </div>
      )}

      {showDeveloperPicsAndFooter && <Footer showCenteredLogo={false} />}
    </div>
  );
};

export default Widgets;
