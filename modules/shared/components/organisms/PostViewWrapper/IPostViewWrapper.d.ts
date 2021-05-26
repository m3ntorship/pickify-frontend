import type { SinglePostResponse } from '@m3ntorship/posts-client/dist/client';

declare namespace IPostViewWrapper {
  export interface IProps {
    postData: SinglePostResponse;
  }
}

export { IPostViewWrapper };
