import type { IGetPosts } from '@modules/shared/api/IGetPosts';
import { postsApi } from '@modules/shared/api/postsApi.api';
import type { ITextPollCreation } from '@modules/shared/components/organisms/TextPollCreation/types/ITextPollCreation';
import type { AxiosError } from 'axios';

export const createPollPost = async (
  post: ITextPollCreation.IState,
): Promise<IGetPosts.IErrorData> => {
  const notFound = 404;
  try {
    const {
      data: { id: postId },
    } = await postsApi.createPost({
      is_hidden: post.hiddenIdentity,
      type: post.postType,
      caption: post.postCaption.value,
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
