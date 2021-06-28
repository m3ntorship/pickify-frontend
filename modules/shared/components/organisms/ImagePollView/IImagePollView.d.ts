import type { IPostFeed } from '../../../types/postFeed/IPostFeed';

declare namespace IImagePollView {
  export interface IProps {
    post: IPostFeed.IPost;
    deletePostHandler: (postId: string) => void;
  }
}

export { IImagePollView };
