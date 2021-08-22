declare namespace IPostViewHeader {
  export interface IProps {
    deletePostHandler: (postId: string) => void;
    userId: string;
    postId: string;
    profilePic?: string;
    isHidden: boolean;
    name?: string;
    date: string;
  }
  // The IData equals to IImgWithInfo.IData
}

export { IPostViewHeader };
