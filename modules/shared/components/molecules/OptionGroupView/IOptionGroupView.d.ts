import type { IPostFeed } from '../../../types/postFeed/IPostFeed';

declare namespace IOptionGroupView {
  export interface IProps {
    group: IPostFeed.IGroup;
    onOptionClick: (e: MouseEvent<HTMLButtonElement>) => void;
    optionCheckedId: string;
  }
}

export { IOptionGroupView };
