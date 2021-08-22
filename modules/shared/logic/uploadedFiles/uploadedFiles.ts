import Resizer from 'react-image-file-resizer';
import type { IUploadedFiles } from './IUploadedFiles';

export const validateUploadedImages = (
  files: FileList | null,
): IUploadedFiles.IImagesData[] => {
  const firstIndex = 0;
  const lastLetter = 5;

  const uploadedFiles = Array.prototype.map.call(files, (file: File) =>
    file.type.substr(firstIndex, lastLetter) !== 'image'
      ? {
          error: true,
          message: 'The uploaded file must be an image!',
        }
      : { error: false, file },
  );
  return uploadedFiles as IUploadedFiles.IImagesData[];
};

export const resizeImage = async (
  file: Blob,
): Promise<Blob | File | ProgressEvent<FileReader> | string> =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      'JPEG',
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      'base64',
    );
  });
