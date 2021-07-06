import type { AxiosError } from 'axios';
import type { PostCreationRequestTypeEnum } from '@m3ntorship/posts-client/dist/client';
import type { IGetPosts } from './IGetPosts';
import { postsApi } from './postsApi.api';
import type { IPostCreation } from '../components/organisms/PostCreation/types/IPostCreation';

export const createPollPost = async (
  post: IPostCreation.IPostRestData & IPostCreation.IPostStructure,
): Promise<IGetPosts.IErrorData> => {
  const notFound = 404;
  try {
    const {
      data: { id: postId },
    } = await postsApi.createPost({
      type: post.postType as unknown as PostCreationRequestTypeEnum,
      is_hidden: post.isHiddenIdentity,
      caption: post.postCaption.body,
      media_count: 0,
    });

    await postsApi.createOptionsGroup(postId, {
      groups: post.groups,
    });
    await postsApi.flagPostAsFinished(postId, {
      finished: true,
    });
    return {
      error: false,
      message: 'post created successfully',
      errorCode: 201,
    } as IGetPosts.IErrorData;
  } catch (error: unknown) {
    const { message } = error as AxiosError<{ message: string }>;
    return {
      error: true,
      message,
      errorCode: notFound,
    } as IGetPosts.IErrorData;
  }
};
