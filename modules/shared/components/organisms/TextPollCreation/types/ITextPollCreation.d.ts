import type { PostCreationRequestTypeEnum } from '@m3ntorship/posts-client/dist/client';
import type { IGetPosts } from '../../../../api/IGetPosts';

declare namespace ITextPollCreation {
  export interface IProps {
    createTextPollPost: (state: IState) => Promise<IGetPosts.IErrorData>;
  }
  export interface IState {
    postType: PostCreationRequestTypeEnum;
    postCaption: { id: string; value: string };
    groups: IGroups[];
    hiddenIdentity: boolean;
    privacy: string;
    image?: string;
  }

  export interface IOption {
    id: string;
    body: string;
  }

  export interface IGroups {
    id?: string;
    name: string;
    options: IOption[];
  }
}
export { ITextPollCreation };
