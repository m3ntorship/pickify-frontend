import type { IPostCreation } from '../../PostCreation/types/IPostCreation';

declare namespace IImagePollCreation {
  export interface IProps {
    post: IPostCreation.IPostStructure;
    postCreationGlobalState: IPostCreation.IState;
    setPostCreationGlobalState: (state: IPostCreation.IState) => void;
  }
  export interface InvalidImages {
    id?: string;
    error: boolean;
    message: string;
  }
}
export { IImagePollCreation };
