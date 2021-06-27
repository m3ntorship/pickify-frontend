import { useState, useEffect } from 'react';
import withErrorHandler from '@modules/shared/components/HOC/WithErrorHandler/WithErrorHandler';
import {
  TextPollView,
  MiniSurveyView,
  ImagePollView,
} from '@modules/shared/components/organisms';
import { EPostType } from '@modules/shared/types/postFeed/EPostType';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import type { FC, ReactElement } from 'react';
import { votesApi } from '@modules/shared/api/postsApi.api';
import styles from '../pages/home-page.module.css';
import { addOneVote } from '../api/addOneVote';

const Posts: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  const [posts, setPosts] = useState<IPostFeed.IPost[]>(data.posts);
  const [optionCheckedId, setOptionCheckedId] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('user');
    const authorizedPosts = posts.map(({ options_groups, ...post }) => {
      if (post.user.id === userId) {
        return { ...post, options_groups };
      }
      const groups = options_groups.groups.map(({ options, ...group }) => {
        const newOptions = options.map(({ vote_count, ...option }) => option);
        return { ...group, options: newOptions };
      });
      return { ...post, options_groups: { groups } };
    });
    setPosts(authorizedPosts);
  }, []);

  const onOptionClick = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    setOptionCheckedId(e.currentTarget.id);
    const res = await votesApi.addVote(e.currentTarget.id);
    console.log(res);
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
                  optionCheckedId={optionCheckedId}
                  onOptionClick={onOptionClick}
                />
              </div>
            );
          case EPostType.MiniSurvey:
            return (
              <div key={post.id} className={styles.posts}>
                <MiniSurveyView post={post} />
              </div>
            );
          case EPostType.ImagePoll:
            return (
              <div key={post.id} className={styles.posts}>
                <ImagePollView post={post} />
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
