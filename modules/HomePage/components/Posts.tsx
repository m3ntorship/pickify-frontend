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

const Posts: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  const [posts, setPosts] = useState<IPostFeed.IPost[]>(data.posts);
  const [optionCheckedId, setOptionCheckedId] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('user');
    const authorizedPosts = posts.map(
      ({ options_groups, ...post }): IPostFeed.IPost => {
        if (post.user.id === userId) {
          return { ...post, options_groups };
        }
        const groups = options_groups.groups.map(({ options, ...group }) => {
          const newOptions = options.map(({ id, body, media }) => {
            return { id, body, media };
          });
          return { ...group, options: newOptions };
        });
        return { ...post, options_groups: { groups } };
      },
    );
    console.log(authorizedPosts);
    setPosts(authorizedPosts);
  }, [data]);

  const addOneVoteHandler = async (
    optionId: string,
    groupId: string,
  ): Promise<void> => {
    const zeroVote = 0;
    setOptionCheckedId(optionId);
    const res = await votesApi.addVote(optionId);
    const votes: Record<string, number> = {
      id_41651616515616: 0,
    };
    res.data.map((option) => {
      votes[option.optionId ?? 'id_12652151'] = option.votes_count ?? zeroVote;
      return option;
    });
    const showVotedOptionsOnClick = posts.map(({ options_groups, ...post }) => {
      const groups = options_groups.groups.map((group) => {
        if (group.id === groupId) {
          const newVotedGroups = group.options.map((option) => ({
            ...option,
            vote_count: votes[option.id],
          }));
          return { ...group, options: newVotedGroups };
        }
        return group;
      });
      return { ...post, options_groups: { groups } };
    });
    setPosts(showVotedOptionsOnClick);
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
                  addOneVote={addOneVoteHandler}
                />
              </div>
            );
          case EPostType.MiniSurvey:
            return (
              <div key={post.id} className={styles.posts}>
                <MiniSurveyView
                  post={post}
                  optionCheckedId={optionCheckedId}
                  addOneVote={addOneVoteHandler}
                />
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
