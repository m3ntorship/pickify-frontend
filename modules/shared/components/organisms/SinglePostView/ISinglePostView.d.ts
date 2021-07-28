import type { IPostFeed } from '../../../types/postFeed/IPostFeed';

declare namespace IPost {
  export interface Props {
    post: IPostFeed.IPost;
    posts: IPostFeed.IPost[];
    setPosts: (posts: IPostFeed.IPost[]) => void;
  }
}

export { IPost };
