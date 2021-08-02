import type { AxiosError } from 'axios';
import type { IGetSinglePost } from './IGetSinglePost';
import { postsApi } from './postsApi.api';

export const getSinglePost = async (
  postId: string,
  userId: string,
): Promise<IGetSinglePost.IData> => {
  return postsApi
    .getOnePost(postId, {
      headers: userId && { Authorization: `Bearer ${userId}` },
    })
    .then(({ data }) => {
      return { data };
    })
    .catch((error: AxiosError) => {
      const { response } = error as { response?: { status: number } };

      const notFound = 500;

      throw Object.assign(new Error(), {
        error: true,
        errorCode: response ? response.status : notFound,
        message: error.message,
      });
    });
};
