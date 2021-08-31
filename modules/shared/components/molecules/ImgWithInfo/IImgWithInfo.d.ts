// import type { IAvatar } from '../../atoms/Avatar/IAvatar';

declare namespace IImgWithInfo {
  export interface IProps {
    profilePic?: string;
    isHidden: boolean;
    title: string;
    subTitle: string;
    description?: string;
    variant: 'avatar' | 'icon';
    avatarSize?:
      | 'extra-large'
      | 'extra-small'
      | 'large'
      | 'medium'
      | 'small'
      | 'super-large';
    // avatarSize?: IAvatar.IProps.size
  }
}

export { IImgWithInfo };
