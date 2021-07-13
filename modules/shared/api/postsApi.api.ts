import { postClient } from '@m3ntorship/posts-client';
import type { Configuration } from '@m3ntorship/posts-client/dist/post-client';
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { getUser } from '../logic/userId/userId';
import type { IGetPosts } from './IGetPosts';

const postsApiAxiosInstance = axios.create({});

// postsApiAxiosInstance.interceptors.response.use(
//   ({ data }) => data, // eslint-disable-line @typescript-eslint/no-unsafe-return
//   async (e) => Promise.reject(e),
// );

postsApiAxiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const { headers } = config as IGetPosts.IAxiosConfig;
    headers.Authorization = `Bearer ${getUser()}`;
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

export const postsApiTemp = axios.create({
  baseURL: 'https://pickify-posts-be-dev.m3ntorship.net/api',
});

export const votesApi = new postClient.VotesApi(
  {
    basePath: 'https://pickify-posts-be-dev.m3ntorship.net/api',
  } as Configuration,
  undefined,
  postsApiAxiosInstance,
);
// export const mediaApi = new MediaApi({
//   basePath: 'https://pickify-media-be-dev.pickify.net/api',
// });

export const uploadOneMedia = (
  file: File,
  entityType: string,
  entityId: string,
): void => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('entity_type', entityType);
  formData.append('entity_id', entityId);
  postsApiAxiosInstance({
    method: 'post',
    url: 'https://pickify-media-be-dev.pickify.net/api/media',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (response) {
      // handle error
      console.log(response);
    });
};
