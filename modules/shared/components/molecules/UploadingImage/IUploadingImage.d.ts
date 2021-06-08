declare namespace IUploadingImage {
  export interface IProps extends IHandlers {
    imageUrl?: string;
    textInputLetter: string;
    textInputId: string;
  }
  export interface IHandlers {
    handleVerticalThreeDotsClick?: () => void;
  }
}
export { IUploadingImage };
