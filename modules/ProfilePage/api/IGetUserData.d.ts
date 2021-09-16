import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';

declare namespace IGetUserData {
  export interface IGetUserRes {
    data: IUserErrorData | IUserSuccessData;
  }

  export interface IUserSuccessData {
    posts: IPostFeed.IPost[];
    postsCount: number;
    user: IPostFeed.IUser;
  }

  export interface IUserErrorData {
    message: string;
    error: boolean;
    errorCode?: number;
  }

  export interface IErrorData {
    response?: { data: { message: string; status_code: number } };
  }
}

export { IGetUserData };
