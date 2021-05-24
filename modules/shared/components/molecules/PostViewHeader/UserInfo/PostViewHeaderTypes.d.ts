import type { IUserInfo } from '../../UserInfo/IUserInfo';

declare namespace PostViewHeaderTypes {
  export interface IProps extends IUserInfo.IProps {
    onClick: () => void;
    id: string;
  }
}

export { PostViewHeaderTypes };
