declare namespace ICreateImagePoll {
  export interface IProps {
    postType: string;
    postCaption: { id: string; value: string };
    imagesData: IImagesData[];
    hiddenIdentity: boolean;
    privacy: string;
  }

  export interface IImagesData {
    file: Blob | string;
    imgId: string;
    imgCaption: string;
    error: boolean;
    message: string;
  }
}
export { ICreateImagePoll };
