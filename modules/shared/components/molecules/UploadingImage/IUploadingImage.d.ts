declare namespace IUploadingImage {
  export interface IProps extends IHandlers {
    file: Blob;
    textInputLetter: string;
    id: string;
    textInputValue?: string;
  }
  export interface IHandlers {
    handleVerticalThreeDotsClick?: () => void;
    handleTextInputOnChange?: () => void;
    handleTextInputOnBlur?: () => void;
  }
}
export { IUploadingImage };
