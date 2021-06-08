import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';

declare namespace ITextPollView {
  export interface IProps {
    post: IPostFeed.IPost;
  }
}

export { ITextPollView };
