import type { IGetPosts } from '../../api/IGetPosts';

declare namespace IUseApiAddPostCreation {
  export interface IApiAddPostCreation {
    loading: boolean;
    errorData: IGetPosts.IErrorData;
    apiPostCreation: () => Promise<void>;
  }
}
export { IUseApiAddPostCreation };
