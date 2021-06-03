declare namespace IAvatar {
  export interface IProps extends IData {
    size: 'extra-small' | 'large' | 'medium' | 'small';
    variant: 'anonymous' | 'filled' | 'notFilled';
  }

  export interface IData {
    profilePic?: string;
  }
}

export { IAvatar };
