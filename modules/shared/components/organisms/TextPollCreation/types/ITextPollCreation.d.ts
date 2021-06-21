import type { PostCreationRequestTypeEnum } from '@m3ntorship/posts-client/dist/client';

declare namespace ITextPollCreation {
  export interface IProps {
    createTextPollPost: (state: IState) => void;
  }
  export interface IState {
    postType: PostCreationRequestTypeEnum;
    postCaption: { id: string; value: string };
    groups: IGroups[];
    hiddenIdentity: boolean;
    privacy: string;
  }

  export interface IOption {
    id: string;
    body: string;
  }

  export interface IGroups {
    name: string;
    options: IOption[];
  }
}
export { ITextPollCreation };
