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
import { transformPostsMedia, updateVotedPost } from './PostsHelpers';

const toasterHandler = (resData: IVotesApi.IVotesErrorData): null => {
  if (!resData.error) {
    return null;
  }
  toast.error(resData.message);
  return null;
};

const Posts: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  const [posts, setPosts] = useState<IPostFeed.IPost[]>(data.posts);

  useEffect(() => {
    const transformedMedia = transformPostsMedia(posts);

    // const authorizedPosts = transformAuthorizedPosts(transformedMedia);

    // console.log(data);

    setPosts(transformedMedia);
  }, [data]);

  const addOneVoteHandler = async (
    optionId: string,
    groupId: string,
  ): Promise<void> => {
    const { resData } = await addOneVote(optionId);

    if (!resData.error) {
      const { votesData } = resData as IVotesApi.IVotesSuccessData;
      const updatedVotedPosts = updateVotedPost(posts, votesData, groupId);

      setPosts(updatedVotedPosts);
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
