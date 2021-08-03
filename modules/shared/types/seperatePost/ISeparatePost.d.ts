import type { IPostFeed } from '../postFeed/IPostFeed';

declare namespace ISeparatePost {
  export interface IProps {
    data: IPostFeed.IPost;
    error: string;
  }
}
export { ISeparatePost };
