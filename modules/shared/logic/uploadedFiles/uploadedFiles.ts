import { randId } from '../createImagePoll/createImagePoll';
import type { IUploadedFiles } from './IUploadedFiles';

export const validateUploadedImages = (
  files: File[] | FileList | null,
): IUploadedFiles.IImagesData[] => {
  const firstIndex = 0;
  const lastLetter = 5;
  const maxFileSizeInByte = 2_000_000;

  const uploadedFiles = Array.prototype.map.call(files, (file: File) => {
    if (file.type.substr(firstIndex, lastLetter) !== 'image') {
      return {
        error: true,
        message: 'invalid file type, must be an image!!',
      };
    }

    if (file.size > maxFileSizeInByte) {
      return { error: true, message: `Max size is 2 MB!!` };
    }

    return { imgId: `${randId()}`, file, error: false, imgCaption: '' };
  }) as IUploadedFiles.IImagesData[];

  return uploadedFiles;
};
