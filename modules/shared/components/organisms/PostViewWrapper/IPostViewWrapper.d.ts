import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';

declare namespace IPostViewWrapper {
  export interface IProps {
    post: IPostFeed.IPost;
  }
}

export { IPostViewWrapper };
