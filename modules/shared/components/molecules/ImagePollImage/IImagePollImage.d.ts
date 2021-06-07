import type { IVoteIcon } from '../../atoms/VoteIcon/IVoteIcon';

declare namespace IImagePollImage {
  export interface IProps extends IVoteIcon.IProps {
    imageUrl: string;
  }
}
export { IImagePollImage };
