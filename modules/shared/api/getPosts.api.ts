import type { AxiosError } from 'axios';
// import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import type { IGetPosts } from './IGetPosts';
import { postsApi } from './postsApi.api';
// import { mockedData } from './postsMockedData';

export const getPosts = async (
  userId: string,
  offset: number,
): Promise<IGetPosts.IData> => {
  return postsApi
    .getPosts(offset, 10, {
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

// export const getPosts = async (): Promise<IPostFeed.IPosts> =>
//   Promise.resolve({ data: mockedData });
// Promise.reject({
//   error: true,
//   errorCode: 500,
//   message: 'sabba7',
// });
