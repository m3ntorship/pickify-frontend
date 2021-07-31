import withErrorHandler from '@modules/shared/components/HOC/WithErrorHandler/WithErrorHandler';
import {
  TextPollView,
  MiniSurveyView,
  ImagePollView,
} from '@modules/shared/components/organisms';
import { EPostType } from '@modules/shared/types/postFeed/EPostType';
import type { FC, ReactElement, ReactText } from 'react';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { updateVotedPost } from '@modules/HomePage/components/Posts/PostsHelpers';
import { useRedirect } from '@modules/shared/hooks/useRedirect/useRedirect';
import { logoutUser } from 'context/AuthUserContext/api/authApi';
import { EStatusCode } from '@modules/shared/api/EStatusCode';
import { deletePost } from '../../../../HomePage/api/DeletePostApi/deletePostsApi';
import type { IVotesApi } from '../../../../HomePage/api/votesApi/IvotesApi';
import { addOneVote } from '../../../../HomePage/api/votesApi/voteApi';
import type { IPost } from './ISinglePostView';
import styles from './SinglePostView.module.css';

const SinglePostView: FC<IPost.Props> = ({
  post,
  posts,
  setPosts,
}): ReactElement => {
  const { redirectToLoginPage } = useRedirect();
  const toastId = useRef<ReactText>();

  const toasterHandler = (resData: IVotesApi.IVotesErrorData): null => {
    if (!resData.error) {
      return null;
    }
    toast.error(resData.message);
    return null;
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

  return (
    <div className={styles.posts}>
      {post.type === EPostType.TextPoll && (
        <div key={post.id} className={styles.posts}>
          <TextPollView
            post={post}
            deletePostHandler={deletePostHandler}
            addOneVote={addOneVoteHandler}
          />
        </div>
      )}
      {post.type === EPostType.MiniSurvey && (
        <div key={post.id} className={styles.posts}>
          <MiniSurveyView
            post={post}
            deletePostHandler={deletePostHandler}
            addOneVote={addOneVoteHandler}
          />
        </div>
      )}
      {post.type === EPostType.ImagePoll && (
        <div key={post.id} className={styles.posts}>
          <ImagePollView
            post={post}
            deletePostHandler={deletePostHandler}
            addOneVote={addOneVoteHandler}
          />
        </div>
      )}
    </div>
  );
};

export default withErrorHandler(SinglePostView);
// function toasterHandler(arg0: IVotesApi.IVotesErrorData) {
//   throw new Error('Function not implemented.');
// }
