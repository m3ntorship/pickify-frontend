import type { IPostFeed } from '../../../types/postFeed/IPostFeed';

declare namespace IMiniSurveyViewOptions {
  export interface IProps {
    optionsGroups: { groups: IPostFeed.IGroup[] };
    onOptionClick: (e: MouseEvent<HTMLButtonElement>) => void;
    optionCheckedId: string;
  }
}

export { IMiniSurveyViewOptions };
