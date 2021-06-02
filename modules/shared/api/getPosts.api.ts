/* eslint-disable */
import type { AxiosError } from 'axios';
import type { IGetPosts } from './IGetPosts';
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

export const getPosts = async (): Promise<any> =>
  Promise.resolve({ data: mockedData });
// Promise.reject({
//   error: true,
//   errorCode: 500,
//   message: 'sabba7',
// });
