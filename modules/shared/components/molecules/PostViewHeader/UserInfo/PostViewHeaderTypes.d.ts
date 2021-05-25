import type { IUserInfo } from '../../UserInfo/IUserInfo';

declare namespace PostViewHeaderTypes {
  export interface IProps extends IUserInfo.IProps {
    handleEditIconClick: () => void;
    id: string;
  }
}

export { PostViewHeaderTypes };
