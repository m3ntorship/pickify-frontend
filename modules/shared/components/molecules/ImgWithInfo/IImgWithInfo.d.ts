declare namespace IImgWithInfo {
  export interface IProps extends IImage {
    classes?: string;
    children?: ReactElement;
    avatarSize?:
      | 'extra-large'
      | 'extra-small'
      | 'large'
      | 'medium'
      | 'small'
      | 'super-large';
    variant?: 'anonymous' | 'filled' | 'notFilled';
    profilePic?: string;
    onAvatarClickHandler?: () => void;
    ImageVariant?: 'avatar' | 'icon';
    isHidden?: boolean;
  }
}

export { IImgWithInfo };
