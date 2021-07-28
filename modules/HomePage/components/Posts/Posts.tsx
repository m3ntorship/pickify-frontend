import React, { useState, useEffect } from 'react';
import withErrorHandler from '@modules/shared/components/HOC/WithErrorHandler/WithErrorHandler';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import type { FC, ReactElement } from 'react';
import SinglePostView from '@modules/shared/components/organisms/SinglePostView/SinglePostView';
import styles from '../../pages/home-page.module.css';
import { transformPostsMedia } from './PostsHelpers';

const Posts: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  const [posts, setPosts] = useState<IPostFeed.IPost[]>(data.posts);

  useEffect(() => {
    const transformedMedia = transformPostsMedia(posts);
    setPosts(transformedMedia);
  }, [data]);

  return (
    <div className={styles.posts}>
      {posts.map((post) => {
        return (
          <SinglePostView
            key={post.id}
            post={post}
            posts={posts}
            setPosts={setPosts}
          />
        );
      })}
    </div>
  );
};

export default withErrorHandler(Posts);
