declare namespace IAvatar {
  export interface IProps extends IData {
    size: 'large' | 'medium' | 'small';
    variant: 'anonymous' | 'filled' | 'notFilled';
  }

  export interface IData {
    profilePic?: string;
  }
}

export { IAvatar };
