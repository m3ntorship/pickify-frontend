import type { IUseUpdatedImageData } from '@modules/shared/hooks/useUpdatedImageData/IUseUpdatedImageData';

declare namespace IUploadingImage {
  export interface IProps
    extends IHandlers,
      PostImages,
      IUseUpdatedImageData.UpdatedImageData {
    letter: string;
  }
  export interface IHandlers {
    handleVerticalThreeDotsClick?: () => void;
    handleTextInputOnBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  }
}
export { IUploadingImage };
