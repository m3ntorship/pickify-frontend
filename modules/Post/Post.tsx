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
import { apiUrls } from '@modules/shared/configuration/ConfigPostCreation/config';
import type { IVotesApi } from '@modules/HomePage/api/votesApi/IvotesApi';
import SinglePostView from '@modules/shared/components/organisms/SinglePostView/SinglePostView';
import type { IPost } from './IPost';

const Post: FC<IPost.Props> = ({ postData }): ReactElement => {
  const [post, setPost] = useState<IPostFeed.IPost>(postData);
  const { redirectToLoginPage, redirectToHomePage } = useRedirect();
  const toastId = useRef<ReactText>();

  const toasterHandler = (resData: IVotesApi.IVotesErrorData): null => {
    if (!resData.error) {
      return null;
    }
    toast.error(resData.message);
    return null;
  };

  const transformPostsMedia = (
    singlePost: IPostFeed.IPost,
  ): IPostFeed.IPost => {
    const groups = singlePost.options_groups.groups.map(
      ({ options, ...group }) => {
        const newOptions = options.map(
          ({ vote_count, voted, id, body, ...option }) => {
            const optionMedia = option.media.map(({ url }) => {
              if (!url.includes('/')) {
                return { url: `${apiUrls.mediaAPI}${url}` };
              }
              return { url };
            });
            return { id, body, vote_count, voted, media: optionMedia };
          },
        );
        const groupMedia = group.media.map(({ url }) => {
          return { url: `${apiUrls.mediaAPI}${url}` };
        });
        return { ...group, media: groupMedia, options: newOptions };
      },
    );
    const postMedia = singlePost.media.map(({ url }) => {
      return { url: `${apiUrls.mediaAPI}${url}` };
    });
    return { ...singlePost, media: postMedia, options_groups: { groups } };
  };

  const updatedVotedPosts = (
    groupId: string,
    resData: IVotesApi.IVotesErrorData | IVotesApi.IVotesSuccessData,
  ): IPostFeed.IPost => {
    const { votesData } = resData as { votesData: IVotesApi.IVotesData[] };
    const votes: Record<string, { voteCount: number; voted: boolean }> = {
      id_41651616515616: { voteCount: 0, voted: false },
    };

    votesData.map((option: IVotesApi.IVotesData) => {
      votes[option.optionId] = {
        voteCount: option.voteCount,
        voted: option.voted,
      };
      return option;
    });

    const groups = post.options_groups.groups.map((group) => {
      if (group.id === groupId) {
        const newVotedGroups = group.options.map((option) => ({
          ...option,
          vote_count: votes[option.id].voteCount,
          voted: votes[option.id].voted,
        }));
        return { ...group, options: newVotedGroups };
      }
      return group;
    });
    return { ...post, options_groups: { groups } };
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
      const updatedPost = updatedVotedPosts(groupId, resData);
      setPost(updatedPost);
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
  useEffect(() => {
    setPost(transformPostsMedia(postData));
  }, [postData]);
  return (
    <div className="w-39xl">
      <SinglePostView
        deletePostHandler={deletePostHandler}
        post={post}
        addOneVoteHandler={addOneVoteHandler}
      />
    </div>
  );
};

export default withErrorHandler(Post);
// function toasterHandler(arg0: IVotesApi.IVotesErrorData) {
//   throw new Error('Function not implemented.');
// }
