import type { IPostFeed } from '../../../types/postFeed/IPostFeed';

declare namespace IMiniSurveyView {
  export interface IProps {
    post: IPostFeed.IPost;
    addOneVote: (optionId: string, grouId: string) => void;
    optionCheckedId: string;
  }
}

export { IMiniSurveyView };
