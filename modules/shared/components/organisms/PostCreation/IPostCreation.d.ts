import type { IGetPosts } from '../../../api/IGetPosts';

declare namespace IPostCreation {
  export interface IProps {
    createTextPollPost: (state: IState) => Promise<IGetPosts.IErrorData>;
    createMiniSurveyPollPost: (state: IState) => Promise<IGetPosts.IErrorData>;
  }
}
export { IPostCreation };
