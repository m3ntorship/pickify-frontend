declare namespace IUseUpdatedImageData {
  export interface UpdatedImageData {
    imagesData: { validImages: ImageData[] };
    setImagesData: (validImages: imagePollState) => void;
    file: File | string;
    id: string;
    caption?: string;
  }

  export interface ImageData {
    imgId: string;
    imgCaption: string;
    file: File | string;
  }
}
export { IUseUpdatedImageData };
