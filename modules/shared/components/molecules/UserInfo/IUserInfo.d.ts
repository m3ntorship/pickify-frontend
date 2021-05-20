import type { IAvatar } from '../../atoms/avatar/IAvatar';

declare namespace IUserInfo {
  export interface IProps extends IAvatar.IProps {
    name?: string;
    date: string;
  }
}

export { IUserInfo };
