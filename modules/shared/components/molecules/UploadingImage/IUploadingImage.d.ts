import type { ICreateImagePoll } from '../../organisms/CreateImagePoll/ICreateImagePoll';

declare namespace IUploadingImage {
  export interface IProps extends IHandlers {
    file: Blob | string;
    letter: string;
    id: string;
    error: boolean;
    message: string;
    imgCaption: string;
    imagePollState: ICreateImagePoll.IProps;
    setImagePollState: (imagesData: imagePollState) => void;
  }
  export interface IHandlers {
    handleVerticalThreeDotsClick?: () => void;
    handleTextInputOnBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  }
}
export { IUploadingImage };
