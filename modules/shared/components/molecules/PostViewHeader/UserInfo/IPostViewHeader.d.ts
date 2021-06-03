import type { IUserInfo } from '../../UserInfo/IUserInfo';

declare namespace IPostViewHeader {
  export interface IProps extends IUserInfo.IData {
    handleEditIconClick: () => void;
    id: string;
  }
  // The IData equals to IUserInfo.IData
}

export { IPostViewHeader };
