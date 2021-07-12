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
import { toast } from 'react-toastify';
import { addOneVote } from '../../api/votesApi/voteApi';
import styles from '../../pages/home-page.module.css';
import type { IVotesApi } from '../../api/votesApi/IvotesApi';
import { deletePost } from '../../api/DeletePostApi/deletePostsApi';
import { transformAuthorizedPosts, transformPostsMedia } from './PostsHelpers';

const toasterHandler = (resData: IVotesApi.IVotesErrorData): null => {
  if (!resData.error) {
    return null;
  }
  toast.error(resData.message);
  return null;
};

const Posts: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  const [posts, setPosts] = useState<IPostFeed.IPost[]>(data.posts);
  const [optionCheckedId, setOptionCheckedId] = useState('');

  useEffect(() => {
    const transformedMedia = transformPostsMedia(posts);

    const authorizedPosts = transformAuthorizedPosts(transformedMedia);
    setPosts(authorizedPosts);
  }, [data]);

  const addOneVoteHandler = async (
    optionId: string,
    groupId: string,
  ): Promise<void> => {
    setOptionCheckedId(optionId);
    const { resData } = await addOneVote(optionId);

    const votes: Record<string, number> = {
      id_41651616515616: 0,
    };

    if (!resData.error) {
      const { votesData } = resData as IVotesApi.IVotesSuccessData;
      votesData.map((option: IVotesApi.IVotesData) => {
        votes[option.optionId] = option.voteCount;
        return option;
      });

      const showVotedOptionsOnClick = posts.map(
        ({ options_groups, ...post }) => {
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
        },
      );

      setPosts(showVotedOptionsOnClick);
    } else {
      toasterHandler(resData as IVotesApi.IVotesErrorData);
    }
  };

  const deletePostHandler = async (postId: string): Promise<void> => {
    const res = await deletePost(postId);
    if (!res.resData.error) {
      toast.success('Post has been deleted successfully');
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);
    } else {
      toast.error(res.resData.message);
    }
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
                  deletePostHandler={deletePostHandler}
                  optionCheckedId={optionCheckedId}
                  addOneVote={addOneVoteHandler}
                />
              </div>
            );
          case EPostType.ImagePoll:
            return (
              <div key={post.id} className={styles.posts}>
                <ImagePollView
                  post={post}
                  deletePostHandler={deletePostHandler}
                  addOneVote={addOneVoteHandler}
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
