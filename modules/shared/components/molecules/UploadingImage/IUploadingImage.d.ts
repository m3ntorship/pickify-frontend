import type React from 'react';

declare namespace IUploadingImage {
  export interface IProps extends IHandlers {
    file: Blob;
    textInputLetter: string;
    id: string;
    textInputValue?: string;
    filesNumber?: number;
    error: boolean;
    message: string;
  }
  export interface IHandlers {
    handleVerticalThreeDotsClick?: () => void;
    imgCaptionHandler: (e: React.FormEvent<HTMLInputElement>) => void;
    handleTextInputOnBlur?: () => void;
  }
}
export { IUploadingImage };
