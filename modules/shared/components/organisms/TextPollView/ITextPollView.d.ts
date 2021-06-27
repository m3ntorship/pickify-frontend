import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';

declare namespace ITextPollView {
  export interface IProps {
    post: IPostFeed.IPost;
    onOptionClick: (e: MouseEvent<HTMLButtonElement>) => void;
    optionCheckedId: string;
  }
}

export { ITextPollView };
