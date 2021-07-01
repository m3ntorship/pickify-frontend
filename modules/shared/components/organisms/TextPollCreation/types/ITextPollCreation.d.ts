import type { IPostCreation } from '../../PostCreation/types/IPostCreation';

declare namespace ITextPollCreation {
  export interface IProps {
    post: IPostCreation.IPostStructure;
    postCreationGlobalState: IPostCreation.IState;
    setPostCreationGlobalState: (state: IPostCreation.IState) => void;
  }
  interface ITextPollMap {
    textPoll: Record<string, Record<string, string>>;
  }
}
export { ITextPollCreation };
