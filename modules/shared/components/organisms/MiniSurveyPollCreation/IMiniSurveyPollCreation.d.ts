import type { IPostCreation } from '../PostCreation/types/IPostCreation';

declare namespace IMiniSurveyPollCreation {
  export interface IPorps {
    post: IPostCreation.IPostStructure;
    postCreationGlobalState: IPostCreation.IState;
    setPostCreationGlobalState: (state: IPostCreation.IState) => void;
  }
}
export { IMiniSurveyPollCreation };
