declare namespace IUseUpdatedImageData {
  export interface UpdatedImageData {
    file: File;
    id: string;
    entityType: string;
  }

  export interface ImageData {
    imgId: string;
    imgCaption: string;
    file: File | string;
  }
}
export { IUseUpdatedImageData };
