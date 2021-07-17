import { postsApi } from '../../../shared/api/postsApi.api';
import type { IDeletePostsApi } from './IDeletePostsApi';
import { errorMessage } from './deletePostHandlers';
import { generateErrMsg } from '../../../shared/logic/generateErrMsg/generateErrMsg';

export const deletePost = async (
  postId: string,
): Promise<IDeletePostsApi.IDeletePostsRes> => {
  try {
    await postsApi.deleteOnePost(postId);

    return {
      resData: { error: false, message: 'Post has been deleted successfully' },
    };
  } catch (error: unknown) {
    const { response } = error as IDeletePostsApi.IDeletePostsResErrorData;
    const { message: errMessage } = error as { message: string };

    if (!response) return { resData: { error: true, message: errMessage } };

    const { data } = response;

    const { message, status_code } = data;

    const generatedMessage = generateErrMsg(errorMessage, status_code, message);

    return { resData: { error: true, message: generatedMessage } };
  }
};
