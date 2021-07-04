import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';

declare namespace ISignleImagePollOption {
  export interface IProps {
    groupName: string;
    imageUrl: string;
    options: IPostFeed.IOptions[];
  }
}
export { ISignleImagePollOption };
