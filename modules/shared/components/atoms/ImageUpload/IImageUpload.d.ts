import type { UseFormRegister } from 'react-hook-form';

declare namespace IImageUpload {
  export interface IProps {
    register?: UseFormRegister<FieldValues>;
    maxFiles: number;
    state: IImagesData[];
    setState: (data: state) => void;
  }

  export interface IImagesData {
    file: Blob | string;
    imgId: string;
    imgCaption: string;
    error: boolean;
    message: string;
  }
}
export { IImageUpload };
