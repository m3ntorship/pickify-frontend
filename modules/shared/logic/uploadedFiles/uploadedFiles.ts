import type { IUploadedFiles } from './IUploadedFiles';

export const validateUploadedImages = (
  files: File[] | FileList | null,
): IUploadedFiles.IImagesData[] => {
  const firstIndex = 0;
  const lastLetter = 5;

  const uploadedFiles = Array.prototype.map.call(files, (file: File) => {
    if (file.type.substr(firstIndex, lastLetter) !== 'image') {
      return {
        error: true,
        message: 'invalid file type, must be an image!!',
      };
    }

    return { file, error: false };
  }) as IUploadedFiles.IImagesData[];

  return uploadedFiles;
};
