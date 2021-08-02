import type { IPostFeed } from '../../../types/postFeed/IPostFeed';

declare namespace IMiniSurveyView {
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

export { IMiniSurveyView };
