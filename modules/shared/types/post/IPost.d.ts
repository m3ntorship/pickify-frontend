import type { IPostFeed } from '../postFeed/IPostFeed';

declare namespace IPost {
  export interface IProps {
    data: IPostFeed.IPost;
    error: string;
  }
}
export { IPost };
