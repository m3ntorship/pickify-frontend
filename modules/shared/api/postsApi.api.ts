import { postClient, mediaClient } from '@m3ntorship/posts-client';
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import type { Configuration } from '@m3ntorship/posts-client/dist/post-client';
import { getUserToken } from '../logic/userAuth/userAuth';
import type { IGetPosts } from './IGetPosts';
import { MEDIA_API, POSTS_API, VOTES_API } from './apiConfigs';

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
    basePath: POSTS_API,
  } as Configuration,
  undefined,
  postsApiAxiosInstance,
);

export const votesApi = new postClient.VotesApi(
  {
    basePath: VOTES_API,
  } as Configuration,
  undefined,
  postsApiAxiosInstance,
);

export const mediaApi = new mediaClient.MediaApi({
  basePath: MEDIA_API,
} as Configuration);
