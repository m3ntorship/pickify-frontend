declare namespace IAvatar {
  export interface IProps {
    size: 'large' | 'medium' | 'small';
    variant: 'anonymous' | 'filled' | 'notFilled';
    imgSrc?: string;
  }
}

export { IAvatar };
