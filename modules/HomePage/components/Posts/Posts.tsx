import React, { useState, useEffect, useRef } from 'react';
import withErrorHandler from '@modules/shared/components/HOC/WithErrorHandler/WithErrorHandler';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import type { FC, ReactElement, ReactText } from 'react';
import SinglePostView from '@modules/shared/components/organisms/SinglePostView/SinglePostView';
import { toast } from 'react-toastify';
import { useRedirect } from '@modules/shared/hooks/useRedirect/useRedirect';
import { deletePost } from '@modules/HomePage/api/DeletePostApi/deletePostsApi';
import { EStatusCode } from '@modules/shared/api/EStatusCode';
import { logoutUser } from 'context/AuthUserContext/api/authApi';
import { addOneVote } from '@modules/HomePage/api/votesApi/voteApi';
import type { IVotesApi } from '@modules/HomePage/api/votesApi/IvotesApi';
import { transformPostsMedia, updateVotedPost } from './PostsHelpers';
import styles from '../../pages/home-page.module.css';

const Posts: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  const [posts, setPosts] = useState<IPostFeed.IPost[]>(data.posts);
  const { redirectToLoginPage } = useRedirect();
  const toastId = useRef<ReactText>();

  useEffect(() => {
    const transformedMedia = transformPostsMedia(posts);
    setPosts(transformedMedia);
  }, [data]);

  const toasterHandler = (resData: IVotesApi.IVotesErrorData): null => {
    if (!resData.error) {
      return null;
    }
    toast.error(resData.message);
    return null;
  };

  const deletePostHandler = async (postId: string): Promise<void> => {
    toastId.current = toast.warning('Please wait while deleting your post', {
      autoClose: false,
    });
    const res = await deletePost(postId);
    toast.dismiss(toastId.current);
    if (!res.resData.error) {
      toast.success('Post has been deleted successfully');
      const updatedPosts = posts.filter((postData) => postData.id !== postId);
      setPosts(updatedPosts);
    } else {
      toast.error(res.resData.message);
      const { errorCode } = res.resData as { errorCode: number };
      if (errorCode === EStatusCode.Unauthorized) {
        await logoutUser();
        redirectToLoginPage();
      }
    }
  };
  const addOneVoteHandler = async (
    optionId: string,
    groupId: string,
  ): Promise<void> => {
    toastId.current = toast.warning('Please wait while processing your vote', {
      autoClose: false,
    });
    const { resData } = await addOneVote(optionId);
    toast.dismiss(toastId.current);
    if (!resData.error) {
      const { votesData } = resData as IVotesApi.IVotesSuccessData;
      const updatedVotedPosts = updateVotedPost(posts, votesData, groupId);
      setPosts(updatedVotedPosts);
    } else {
      const { errorCode } = resData as { errorCode: number };
      toasterHandler(resData as IVotesApi.IVotesErrorData);
      if (errorCode === EStatusCode.Unauthorized) {
        await logoutUser();
        redirectToLoginPage();
      }
    }
  };
  return (
    <div className={styles.posts}>
      {posts.map((post) => {
        return (
          <SinglePostView
            key={post.id}
            post={post}
            addOneVoteHandler={addOneVoteHandler}
            deletePostHandler={deletePostHandler}
          />
        );
      })}
    </div>
  );
};

export default withErrorHandler(Posts);
