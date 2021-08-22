declare namespace IImgWithInfo {
  export interface IProps {
    profilePic?: string;
    isHidden: boolean;
    title: string;
    subTitle: string;
    description?: string;
    variant: 'avatar' | 'icon';
  }
}

export { IImgWithInfo };
