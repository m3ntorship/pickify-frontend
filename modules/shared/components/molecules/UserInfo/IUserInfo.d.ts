import type { IAvatar } from '../../atoms/Avatar/IAvatar';

declare namespace IUserInfo {
  export interface IProps extends IAvatar.IData, IData {}
  export interface IData extends IAvatar.IData {
    isHidden: boolean;
    name?: string;
    date: Date;
  }
}

export { IUserInfo };
