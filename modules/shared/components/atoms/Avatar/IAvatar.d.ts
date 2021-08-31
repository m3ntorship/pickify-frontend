declare namespace IAvatar {
  export interface IProps extends IData, IHandlers {
    size:
      | 'extra-large'
      | 'extra-small'
      | 'large'
      | 'medium'
      | 'small'
      | 'super-large';
    variant: 'anonymous' | 'filled' | 'notFilled';
  }

  export interface IData {
    profilePic?: string;
  }

  export interface IHandlers {
    onClick?: () => void;
  }
}

export { IAvatar };
