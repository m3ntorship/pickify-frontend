import type { IPostFeed } from '../../../types/postFeed/IPostFeed';

declare namespace IMiniSurveyViewOptions {
  export interface IProps {
    optionsGroups: { groups: IPostFeed.IGroup[] };
  }
}

export { IMiniSurveyViewOptions };
