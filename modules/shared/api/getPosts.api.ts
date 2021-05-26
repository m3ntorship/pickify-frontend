import type { InlineResponse200 } from '@m3ntorship/posts-client/dist/client';
import type { AxiosResponse } from 'axios';
import { postsApi } from './baseURL.api';

export const getPosts = async (): Promise<
  AxiosResponse<InlineResponse200> | unknown
> => {
  try {
    return await postsApi.getPosts();
  } catch (error: unknown) {
    return error;
  }
};
