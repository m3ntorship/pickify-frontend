import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';

declare namespace ITextPollView {
  export interface IProps {
    post: IPostFeed.IPost;
    deletePostHandler: (postId: string) => void;
    addOneVote: (optionId: string, grouId: string) => void;
    sharePostHandler: (
      postId: string,
      setCopied: (copied: boolean) => void,
      copied: boolean,
    ) => void;
  }
}

export { ITextPollView };
