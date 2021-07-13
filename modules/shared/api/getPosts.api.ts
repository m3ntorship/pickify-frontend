import type { AxiosError } from 'axios';
// import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import type { IGetPosts } from './IGetPosts';
import { postsApi } from './postsApi.api';
// import { mockedData } from './postsMockedData';

export const getPosts = async (userId: string): Promise<IGetPosts.IData> => {
  return postsApi
    .getPosts(undefined, undefined, {
      headers: { Authorization: `Bearer ${userId}` },
    })
    .then(({ data }) => {
      // console.dir(data, { depth: null });
      return { data };
    })
    .catch((error: AxiosError) => {
      const { response } = error as { response?: { status: number } };
      const notFound = 404;
      return {
        data: {
          error: true,
          errorCode: response ? response.status : notFound,
          message: error.message,
        },
      };
    });
};

// export const getPostsTemp = async (
//   userId: string,
// ): Promise<IGetPosts.IData> => {
//   return axios
//     .get('https://pickify-posts-be-dev.m3ntorship.net/api/posts', {
//       headers: { Authorization: `Bearer ${userId}` },
//     })
//     .then(({ data }: AxiosResponse<InlineResponse200>) => {
//       // console.dir(data, { depth: null });
//       return { data };
//     })
//     .catch((error: AxiosError) => {
//       const { response } = error as { response?: { status: number } };
//       const notFound = 404;
//       return {
//         data: {
//           error: true,
//           errorCode: response ? response.status : notFound,
//           message: error.message,
//         },
//       };
//     });
// };

// export const getPosts = async (): Promise<IPostFeed.IPosts> =>
//   Promise.resolve({ data: mockedData });
// Promise.reject({
//   error: true,
//   errorCode: 500,
//   message: 'sabba7',
// });
