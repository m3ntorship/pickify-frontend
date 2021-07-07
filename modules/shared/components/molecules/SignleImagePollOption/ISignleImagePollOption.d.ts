import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';

declare namespace ISignleImagePollOption {
  export interface IProps {
    groupName: string;
    media: { url: string }[];
    options: IPostFeed.IOptions[];
    onOptionClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }
}
export { ISignleImagePollOption };
