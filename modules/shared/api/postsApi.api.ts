/*eslint-disable*/
import { PostsApi } from '@m3ntorship/posts-client';
import type { Configuration } from '@m3ntorship/posts-client/dist/client';
import axios from 'axios';
import { getUser } from '../logic/user';

const postsApiAxiosInstance = axios.create({});

// postsApiAxiosInstance.interceptors.response.use(
//   ({ data }) => data, // eslint-disable-line @typescript-eslint/no-unsafe-return
//   async (e) => Promise.reject(e),
// );

postsApiAxiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getUser()}`;
    return config;
  },
  async (e) => Promise.reject(e),
);

export const postsApi = new PostsApi(
  {
    basePath: 'https://pickify-posts-be-dev.pickify.net/api',
  } as Configuration,
  undefined,
  postsApiAxiosInstance,
);
