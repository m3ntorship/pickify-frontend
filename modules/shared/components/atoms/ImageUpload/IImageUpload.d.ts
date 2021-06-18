import type { IUploadedFiles } from '@modules/shared/logic/uploadedFiles/IUploadedFiles';
import type { UseFormRegister } from 'react-hook-form';

declare namespace IImageUpload {
  export interface IProps {
    register?: UseFormRegister<FieldValues>;
    maxFiles: number;
    files: IUploadedFiles.IImagesData[];
    setFiles: (data: state) => void;
  }
}
export { IImageUpload };
