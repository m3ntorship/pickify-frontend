import type { InlineResponse200 } from '@m3ntorship/posts-client/dist/post-client';

declare namespace IGetPosts {
  export interface IData {
    data: IErrorData | InlineResponse200;
  }

  export interface IErrorData {
    error: boolean;
    errorCode: number;
    message: string;
  }

  export interface IAxiosConfig {
    headers: { Authorization: string };
  }
}

export { IGetPosts };
