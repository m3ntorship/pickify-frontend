import type { IAvatar } from '../../atoms/avatar/IAvatar';

declare namespace IUserInfo {
  export interface IProps extends IAvatar.IData {
    name?: string;
    date: Date;
    isHidden: boolean;
  }
}

export { IUserInfo };
