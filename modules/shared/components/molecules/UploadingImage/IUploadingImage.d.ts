declare namespace IUploadingImage {
  export interface IProps extends IHandlers {
    file: Blob;
    letter: string;
    id: string;
    error: boolean;
    message: string;
  }
  export interface IHandlers {
    handleVerticalThreeDotsClick?: () => void;
    handleTextInputOnBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  }
}
export { IUploadingImage };
