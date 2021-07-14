import type { AxiosError } from 'axios';
// import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import type { IGetPosts } from './IGetPosts';
import { postsApi } from './postsApi.api';
// import { mockedData } from './postsMockedData';

export const getPosts = async (userId: string): Promise<IGetPosts.IData> => {
  return postsApi
    .getPosts(undefined, undefined, {
      headers: userId && { Authorization: `Bearer ${userId}` },
    })
    .then(({ data }) => {
      return { data };
    })
    .catch((error: AxiosError) => {
      const { response } = error as { response?: { status: number } };
      const notFound = 500;
      return {
        data: {
          error: true,
          errorCode: response ? response.status : notFound,
          message: error.message,
        },
      };
    });
};

// export const getPosts = async (): Promise<IPostFeed.IPosts> =>
//   Promise.resolve({ data: mockedData });
// Promise.reject({
//   error: true,
//   errorCode: 500,
//   message: 'sabba7',
// });
