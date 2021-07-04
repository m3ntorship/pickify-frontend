import type { IImagePollCovered } from '../../atoms/ImagePollCovered/IImagePollCovered';

declare namespace IImagePollOption {
  export interface IProps extends IImagePollCovered.IProps {
    imageUrl: string;
    imgCaption: string;
    imgCaptionLetter?: string;
  }
}
export { IImagePollOption };
