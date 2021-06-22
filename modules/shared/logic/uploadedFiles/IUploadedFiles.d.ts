declare namespace IUploadedFiles {
  export interface IImagesData {
    file: File | string;
    imgId: string;
    imgCaption: string;
    error: boolean;
    message: string;
  }
}
export { IUploadedFiles };
