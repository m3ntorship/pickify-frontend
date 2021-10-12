import type { SinglePostResponse } from '@m3ntorship/posts-client/dist/post-client';

declare namespace IGetSinglePost {
  export interface IData {
    data: IErrorData | SinglePostResponse;
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

export { IGetSinglePost };
