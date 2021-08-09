import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import TrendingQuestions from '@modules/shared/components/organisms/TrendingQuestions/TrendingQuestions';
import styles from './home-page.module.css';
import Posts from '../components/Posts/Posts';
import NewPost from '../components/NewPost/NewPost';

const HomePage: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  return (
    <section className="min-h-screen relative">
      <section className={styles['layout-parent']}>
        <div className={styles['posts-feed']}>
          <NewPost />
          <Posts data={data} />
        </div>
        <div className={styles.widgets}>
          <TrendingQuestions />
        </div>
      </section>
    </section>
  );
};

export default HomePage;
