import { postsApi } from '@modules/shared/api/postsApi.api';
import type { IPostsApi } from './IPostsApi';

export const deletePost = async (
  postId: string,
): Promise<IPostsApi.IPostsRes> => {
  try {
    await postsApi.deleteOnePost(postId);

    return {
      resData: {
        error: false,
        message: 'Post has been deleted successfully',
      },
    };
  } catch (error: unknown) {
    const { response } = error as IPostsApi.IErrorData;
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
