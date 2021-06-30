import type { IUploadedFiles } from '@modules/shared/logic/uploadedFiles/IUploadedFiles';
import type { UseFormRegister } from 'react-hook-form';

declare namespace IFileUploader {
  export interface IProps extends IHandlers {
    register?: UseFormRegister<FieldValues>;
    maxFiles: number;
    lastFilesLength: number;
    entityType: 'group' | 'option' | 'post';
  }

  export interface IHandlers {
    onFileSuccess: (files: IUploadedFiles.IImagesData[]) => void;
    // onFileError: (files: IUploadedFiles.IImagesData[]) => void;
    // onMaxFilesError: (file: { error: boolean; message: string }) => void;
  }
}
export { IFileUploader };
