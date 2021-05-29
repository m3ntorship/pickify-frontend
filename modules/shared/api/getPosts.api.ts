import type { AxiosError } from 'axios';
import type { IGetPosts } from './IGetPosts';
import { postsApi } from './postsApi.api';

export const getPosts = async (): Promise<IGetPosts.IData> => {
  const notFound = 404;
  return postsApi
    .getPosts()
    .then(({ data }) => {
      return { data };
    })
    .catch((error: AxiosError) => {
      return {
        data: {
          error: true,
          errorCode: error.response ? error.response.status : notFound,
          message: error.message,
        },
      };
    });
};
