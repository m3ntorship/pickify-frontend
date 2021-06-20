// import type { AxiosError } from 'axios';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
// import type { IGetPosts } from './IGetPosts';
import { postsApi } from './postsApi.api';
import { mockedData } from './postsMockedData';
// export const getPosts = async (): Promise<IGetPosts.IData> => {
//   const notFound = 404;
//   return postsApi
//     .getPosts()
//     .then(({ data }) => {
//       return { data };
//     })
//     .catch((error: AxiosError) => {
//       return {
//         data: {
//           error: true,
//           errorCode: error.response ? error.response.status : notFound,
//           message: error.message,
//         },
//       };
//     });
// };

export const getPosts = async (): Promise<IPostFeed.IPosts> => {
  const {
    data: { posts },
  } = await postsApi.getPosts();
  return { data: { posts } };
};

// export const getPosts = async (): Promise<IPostFeed.IPosts> =>
// Promise.resolve({ data: mockedData });
// Promise.reject({
//   error: true,
//   errorCode: 500,
//   message: 'sabba7',
// });
