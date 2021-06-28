import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';

declare namespace ITextPollView {
  export interface IProps {
    post: IPostFeed.IPost;
    addOneVote: (optionId: string, grouId: string) => void;
    optionCheckedId: string;
  }
}

export { ITextPollView };
