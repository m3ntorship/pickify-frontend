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
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPosts } from '@modules/shared/api/getPosts.api';
import { getUserToken } from '@modules/shared/logic/userAuth/userAuth';
import { transformPostsMedia, updateVotedPost } from './PostsHelpers';

const Posts: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  const [posts, setPosts] = useState<IPostFeed.IPost[]>(data.posts);
  const [hasMore, setHasmore] = useState<boolean>(true);
  const [postsCount, setPostsCount] = useState<number>(data.postsCount);
  const { redirectToLoginPage } = useRedirect();
  const toastId = useRef<ReactText>();

  useEffect(() => {
    setHasmore(posts.length < postsCount + 100);
  }, [posts, postsCount]);

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

  const getMorePosts = async (): Promise<void> => {
    const loggedInUser = getUserToken();
    if (!loggedInUser) {
      await logoutUser();
      toast.error('Please login first to interact with our app');
      redirectToLoginPage();
      return;
    }

    try {
      const { data: newData } = await getPosts(loggedInUser, posts.length);
      const { posts: newPosts } = newData as { posts: IPostFeed.IPost[] };

      const transformedMedia = transformPostsMedia(newPosts);

      setPosts([...posts, ...transformedMedia]);
    } catch (err: unknown) {
      const { errorCode, message } = err as {
        errorCode: number;
        message: string;
      };
      toast.error(message);
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
      setPostsCount((prevState) => prevState - 1);
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
    <div>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePosts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {posts.map((post) => {
          return (
            <div className="mb-6" key={post.id}>
              <SinglePostView
                post={post}
                addOneVoteHandler={addOneVoteHandler}
                deletePostHandler={deletePostHandler}
              />
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default withErrorHandler(Posts);
