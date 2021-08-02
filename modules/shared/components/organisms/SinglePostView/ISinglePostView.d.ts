import type { IPostFeed } from '../../../types/postFeed/IPostFeed';

declare namespace IPost {
  export interface Props {
    post: IPostFeed.IPost;
    deletePostHandler: (postId: string) => void;
    addOneVoteHandler: (optionId: string, grouId: string) => void;
  }
}

export { IPost };
