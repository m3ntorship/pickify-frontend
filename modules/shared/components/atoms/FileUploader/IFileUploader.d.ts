import type { IUploadedFiles } from '@modules/shared/logic/uploadedFiles/IUploadedFiles';

declare namespace IFileUploader {
  export interface IProps extends IHandlers {
    maxFiles: number;
    lastFilesLength: number;
    entityType: 'group' | 'option' | 'post';
  }

  export interface IHandlers {
    onFileSuccess: (files: IUploadedFiles.IImagesData[]) => void;
  }
}
export { IFileUploader };
