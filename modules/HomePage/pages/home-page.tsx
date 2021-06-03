import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import Navigation from '@modules/shared/components/molecules/Navigation/Navigation';
import styles from './home-page.module.css';

const HomePage: FC<IPostFeed.Posts> = (): ReactElement => {
  return (
    <section className="bg-grey-bg2 min-h-screen">
      <Navigation />
      <section className={styles['layout-parent']}>
        <div className={styles['posts-feed']}>aaaaaaaaa</div>
        <div className={styles.widgets}>aaaaaaaaaaa</div>
      </section>
    </section>
  );
};

export default HomePage;
