import { postClient, mediaClient } from '@m3ntorship/posts-client';
import type { Configuration } from '@m3ntorship/posts-client/dist/post-client';
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { getUserToken } from '../logic/userAuth/userAuth';
import type { IGetPosts } from './IGetPosts';

const postsApiAxiosInstance = axios.create({});

postsApiAxiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const { headers } = config as IGetPosts.IAxiosConfig;
    if (!headers.Authorization) {
      const user = getUserToken();
      if (user) {
        headers.Authorization = `Bearer ${user}`;
      }
    }
    return config;
  },
  async (e: Error) => Promise.reject(e),
);
export const postsApi = new postClient.PostsApi(
  {
    basePath: 'https://pickify-posts-be-dev.m3ntorship.net/api',
  } as Configuration,
  undefined,
  postsApiAxiosInstance,
);

export const votesApi = new postClient.VotesApi(
  {
    basePath: 'https://pickify-posts-be-dev.m3ntorship.net/api',
  } as Configuration,
  undefined,
  postsApiAxiosInstance,
);

export const mediaApi = new mediaClient.MediaApi({
  basePath: 'https://pickify-media-be-dev.pickify.net/api',
} as Configuration);
