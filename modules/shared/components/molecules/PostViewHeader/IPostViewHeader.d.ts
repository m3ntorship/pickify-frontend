import type { IUserInfo } from '../UserInfo/IUserInfo';

declare namespace IPostViewHeader {
  export interface IProps extends IUserInfo.IData {
    deletePostHandler: (postId: string) => void;
    postId: string;
  }
  // The IData equals to IUserInfo.IData
}

export { IPostViewHeader };
