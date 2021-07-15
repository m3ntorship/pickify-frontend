import { postsApi } from '../../../shared/api/postsApi.api';
import type { IDeletePostsApi } from './IDeletePostsApi';

export const deletePost = async (
  postId: string,
): Promise<IDeletePostsApi.IDeletePostsRes> => {
  try {
    await postsApi.deleteOnePost(postId);

    return {
      resData: {
        error: false,
        message: 'Post has been deleted successfully',
      },
    };
  } catch (error: unknown) {
    const { response } = error as IDeletePostsApi.IDeletePostsResErrorData;
    let message = '';
    if (!response) {
      return {
        resData: {
          error: true,
          message: 'Network Error',
        },
      };
    }
    switch (response.data.status_code) {
      case 404:
        message = 'Not Found';
        break;
      default:
        message = 'Unauthorized';
    }
    return {
      resData: {
        error: true,
        message,
      },
    };
  }
};
