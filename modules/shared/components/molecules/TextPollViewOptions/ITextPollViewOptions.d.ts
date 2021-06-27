import type { MouseEvent } from 'react';
import type { IPostFeed } from '../../../types/postFeed/IPostFeed';

declare namespace ITextPollViewOptions {
  export interface IProps {
    optionsGroups: { groups: IPostFeed.IGroup[] };
    onOptionClick: (e: MouseEvent<HTMLButtonElement>) => void;
    optionCheckedId: string;
  }
}

export { ITextPollViewOptions };
