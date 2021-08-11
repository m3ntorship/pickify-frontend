import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import Posts from '../components/Posts/Posts';
import NewPost from '../components/NewPost/NewPost';

const HomePage: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  return (
    <>
      <NewPost />
      <Posts data={data} />
    </>
  );
};

export default HomePage;
