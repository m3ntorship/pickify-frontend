import type { IPostFeed } from '../../../types/postFeed/IPostFeed';

declare namespace IMiniSurveyViewOptions {
  export interface IProps {
    optionsGroups: { groups: IPostFeed.IGroup[] };
    addOneVote: (optionId: string, grouId: string) => void;
  }
}

export { IMiniSurveyViewOptions };
