import type { IUseUpdatedImageData } from '../../../hooks/useUpdatedImageData/IUseUpdatedImageData';

declare namespace IUploadingImage {
  export interface IProps
    extends IHandlers,
      PostImages,
      IUseUpdatedImageData.UpdatedImageData {
    letter: string;
  }
  export interface IHandlers {
    handleVerticalThreeDotsClick?: () => void;
  }
}
export { IUploadingImage };
