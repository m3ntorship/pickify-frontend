import type { ReactElement } from 'react';

declare namespace IImgWithInfo {
  export interface IProps {
    classes?: string;
    children: ReactElement;
    isResponsive?: boolean;
  }

  export interface IImage {
    classes?: string;
    children?: ReactElement;
    isResponsive?: boolean;
    ImageSize:
      | 'extra-large'
      | 'extra-small'
      | 'large'
      | 'medium'
      | 'small'
      | 'super-large';
    variant?: 'anonymous' | 'filled' | 'notFilled';
    profilePic?: string;
    onAvatarClickHandler?: () => void;
    ImageVariant: 'avatar' | 'icon';
    isHidden?: boolean;
  }

  export interface ITitle extends IProps {
    classes?: string;
    children?: string;
    titleSize: 'large' | 'medium' | 'small';
  }

  export interface ISubTitle extends IProps {
    classes?: string;
    children: ReactElement | string;
    subTitleSize: 'medium' | 'small';
  }
}

export { IImgWithInfo };
