import type { IPostFeed } from '../../../types/postFeed/IPostFeed';

declare namespace ITextPollViewOptions {
  export interface IProps {
    optionsGroups: { groups: IPostFeed.IGroup[] };
    addOneVote: (optionId: string, grouId: string) => void;
    optionCheckedId: string;
  }
}

export { ITextPollViewOptions };
