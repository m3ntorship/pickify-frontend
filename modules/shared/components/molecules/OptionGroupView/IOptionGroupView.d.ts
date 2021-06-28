import type { IPostFeed } from '../../../types/postFeed/IPostFeed';

declare namespace IOptionGroupView {
  export interface IProps {
    group: IPostFeed.IGroup;
    addOneVote: (optionId: string, grouId: string) => void;
    optionCheckedId: string;
  }
}

export { IOptionGroupView };
