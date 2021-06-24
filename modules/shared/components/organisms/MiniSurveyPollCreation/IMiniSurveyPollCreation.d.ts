import type { PostCreationRequestTypeEnum } from '@m3ntorship/posts-client/dist/client';
import type { IGetPosts } from '../../../api/IGetPosts';

declare namespace IMiniSurveyPollCreation {
  export interface IProps {
    createMiniSurveyPollPost: (state: IState) => Promise<IGetPosts.IErrorData>;
  }
  export interface IState {
    postType: PostCreationRequestTypeEnum;
    postCaption: {
      id: string;
      value: string;
    };
    groups: {
      id?: string;
      name: string;
      options: {
        id: string;
        body: string;
      }[];
    }[];
    hiddenIdentity: boolean;
    privacy: string;
    image?: string;
  }
}
export { IMiniSurveyPollCreation };
