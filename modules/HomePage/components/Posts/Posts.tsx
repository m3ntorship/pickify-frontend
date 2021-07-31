import { useState, useEffect, useRef } from 'react';
import withErrorHandler from '@modules/shared/components/HOC/WithErrorHandler/WithErrorHandler';
import {
  TextPollView,
  MiniSurveyView,
  ImagePollView,
} from '@modules/shared/components/organisms';
import { EPostType } from '@modules/shared/types/postFeed/EPostType';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import type { FC, ReactElement, ReactText } from 'react';
import { toast } from 'react-toastify';
import { logoutUser } from '../../../../context/AuthUserContext/api/authApi';
import { addOneVote } from '../../api/votesApi/voteApi';
import styles from '../../pages/home-page.module.css';
import type { IVotesApi } from '../../api/votesApi/IvotesApi';
import { deletePost } from '../../api/DeletePostApi/deletePostsApi';
import { transformPostsMedia, updateVotedPost } from './PostsHelpers';
import { useRedirect } from '../../../shared/hooks/useRedirect/useRedirect';
import { EStatusCode } from '../../../shared/api/EStatusCode';

const toasterHandler = (resData: IVotesApi.IVotesErrorData): null => {
  if (!resData.error) {
    return null;
  }
  toast.error(resData.message);
  return null;
};

const Posts: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  const [posts, setPosts] = useState<IPostFeed.IPost[]>(data.posts);
  const { redirectToLoginPage } = useRedirect();
  const toastId = useRef<ReactText>();

  useEffect(() => {
    const transformedMedia = transformPostsMedia(posts);
    setPosts(transformedMedia);
  }, [data]);

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

  const deletePostHandler = async (postId: string): Promise<void> => {
    toastId.current = toast.warning('Please wait while deleting your post', {
      autoClose: false,
    });
    const res = await deletePost(postId);
    toast.dismiss(toastId.current);
    if (!res.resData.error) {
      toast.success('Post has been deleted successfully');
      const updatedPosts = posts.filter((post) => post.id !== postId);
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
  const sharePostHandler = async (
    postId: string,
    setCopied: (copied: boolean) => void,
    copied: boolean,
  ): Promise<void> => {
    if (typeof window !== 'undefined') {
      const baseUrl = window.location.href;
      try {
        await navigator.clipboard.writeText(`${baseUrl}posts/${postId}`);
        setCopied(!copied);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (err: unknown) {
        console.log('Clipboard access is denied', err);
      }
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
                  sharePostHandler={sharePostHandler}
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
                  sharePostHandler={sharePostHandler}
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
                  sharePostHandler={sharePostHandler}
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
