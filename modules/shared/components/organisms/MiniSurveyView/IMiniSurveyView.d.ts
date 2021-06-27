import type { IPostFeed } from '../../../types/postFeed/IPostFeed';

declare namespace IMiniSurveyView {
  export interface IProps {
    post: IPostFeed.IPost;
    onOptionClick: (e: MouseEvent<HTMLButtonElement>) => void;
    optionCheckedId: string;
  }
}

export { IMiniSurveyView };
