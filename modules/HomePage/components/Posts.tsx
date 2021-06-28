import { useState, useEffect } from 'react';
import { postsApi } from '@modules/shared/api/postsApi.api';
import withErrorHandler from '@modules/shared/components/HOC/WithErrorHandler/WithErrorHandler';
import {
  TextPollView,
  MiniSurveyView,
  ImagePollView,
} from '@modules/shared/components/organisms';
import { EPostType } from '@modules/shared/types/postFeed/EPostType';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import type { FC, ReactElement } from 'react';
import styles from '../pages/home-page.module.css';

const Posts: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  const [posts, setPosts] = useState<IPostFeed.IPost[]>([]);
  useEffect(() => {
    setPosts(data.posts);
  }, [data]);
  const deletePostHandler = async (postId: string): Promise<void> => {
    const res = await postsApi.deleteOnePost(postId);
    console.log(res);
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div className={styles.posts}>
      {posts.map((post) => {
        switch (post.type) {
          case EPostType.TextPoll:
            return (
              <div key={post.id} className={styles.posts}>
                <TextPollView
                  post={post}
                  deletePostHandler={deletePostHandler}
                />
              </div>
            );
          case EPostType.MiniSurvey:
            return (
              <div key={post.id} className={styles.posts}>
                <MiniSurveyView
                  post={post}
                  deletePostHandler={deletePostHandler}
                />
              </div>
            );
          case EPostType.ImagePoll:
            return (
              <div key={post.id} className={styles.posts}>
                <ImagePollView
                  post={post}
                  deletePostHandler={deletePostHandler}
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default withErrorHandler(Posts);
