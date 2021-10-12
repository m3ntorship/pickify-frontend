import { postClient, mediaClient } from '@m3ntorship/posts-client';
import type { Configuration } from '@m3ntorship/posts-client/dist/post-client';
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { getUserToken } from '../logic/userAuth/userAuth';
import type { IGetPosts } from './IGetPosts';

const postsApiAxiosInstance = axios.create({});

// postsApiAxiosInstance.interceptors.response.use(
//   ({ data }) => data, // eslint-disable-line @typescript-eslint/no-unsafe-return
//   async (e) => Promise.reject(e),
// );
interface Configigurations {
  apis: {
    posts: string;
    votes: string;
    media: string;
  };
}
// prettier-ignore
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const configurations = process.env.config as unknown as Configigurations;

export const POSTS_API = `${configurations.apis.posts}/api`;
export const VOTES_API = `${configurations.apis.votes}/api`;
export const MEDIA_API = `${configurations.apis.media}/api`;

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
