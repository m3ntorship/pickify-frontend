import withErrorHandler from '@modules/shared/components/HOC/WithErrorHandler/WithErrorHandler';
import type { FC, ReactElement, ReactText } from 'react';
import { useEffect, useState, useRef } from 'react';
import { useRedirect } from '@modules/shared/hooks/useRedirect/useRedirect';
import { addOneVote } from '@modules/HomePage/api/votesApi/voteApi';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import { toast } from 'react-toastify';
import { EStatusCode } from '@modules/shared/api/EStatusCode';
import { logoutUser } from 'context/AuthUserContext/api/authApi';
import { deletePost } from '@modules/HomePage/api/DeletePostApi/deletePostsApi';
import type { IVotesApi } from '@modules/HomePage/api/votesApi/IvotesApi';
import SinglePostView from '@modules/shared/components/organisms/SinglePostView/SinglePostView';
import {
  transformPostsMedia,
  updateVotedPost,
} from '@modules/HomePage/components/Posts/PostsHelpers';
import { getUserToken } from '@modules/shared/logic/userAuth/userAuth';
import type { IReportPostApi } from '@modules/shared/api/reportPost/IReportPostApi';
import { reportPost } from '@modules/shared/api/reportPost/reportPostApi';
import type { IPostPage } from './IPostPage';

const PostPage: FC<IPostPage.Props> = ({ data }): ReactElement => {
  const [post, setPost] = useState<IPostFeed.IPost>(data);
  const { redirectToLoginPage, redirectToHomePage } = useRedirect();

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
      const { votesData } = resData as { votesData: IVotesApi.IVotesData[] };
      const updatedPost = updateVotedPost([post], votesData, groupId);
      setPost(updatedPost[0]);
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
      redirectToHomePage();
    } else {
      toast.error(res.resData.message);
      const { errorCode } = res.resData as { errorCode: number };
      if (errorCode === EStatusCode.Unauthorized) {
        await logoutUser();
        redirectToLoginPage();
      }
    }
  };

  const reportPostHandler = async (postId: string): Promise<void> => {
    const loggedInUser = getUserToken();
    toastId.current = toast.warning('Please wait while reporting your post', {
      autoClose: false,
    });
    try {
      const { resData } = await reportPost(postId, loggedInUser);
      toast.dismiss(toastId.current);
      toast.success(resData.message);
    } catch (error: unknown) {
      const { resData } = error as {
        resData: IReportPostApi.IReportPostErrorData;
      };
      toast.dismiss(toastId.current);
      toast.error(resData.message);
      const { errorCode } = resData as { errorCode: number };
      if (errorCode === EStatusCode.Unauthorized) {
        await logoutUser();
        redirectToLoginPage();
      }
    }
  };

  useEffect(() => {
    const transformedPost = transformPostsMedia([data]);
    setPost(transformedPost[0]);
  }, [data]);
  return (
    <div className="w-full mb-2">
      <SinglePostView
        post={post}
        addOneVoteHandler={addOneVoteHandler}
        deletePostHandler={deletePostHandler}
        reportPostHandler={reportPostHandler}
      />
    </div>
  );
};

export default withErrorHandler(PostPage);
