import type { IVoteIcon } from '../../atoms/VoteIcon/IVoteIcon';

declare namespace IImagePollOption {
  export interface IProps extends IVoteIcon.IProps {
    imageUrl: string;
    imgCaption: string;
    imgCaptionLetter?: string;
  }
}
export { IImagePollOption };
