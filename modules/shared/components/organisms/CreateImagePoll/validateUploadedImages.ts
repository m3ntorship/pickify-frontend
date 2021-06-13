import { randId } from '../../../logic/createImagePoll/createImagePoll';
import type { ICreateImagePoll } from './ICreateImagePoll';

export const validateUploadedImages = (
  files: FileList | null,
): ICreateImagePoll.IProps[] => {
  const firstIndex = 0;
  const lastLetter = 5;
  const maxFilesLength = 4;
  const maxFileSizeInByte = 2000000;

  const maxFiles = Array.prototype.slice.call(
    files,
    firstIndex,
    maxFilesLength,
  );

  const uploadedFiles = Array.prototype.map.call(maxFiles, (file: File) => {
    if (file.type.substr(firstIndex, lastLetter) !== 'image') {
      return {
        error: true,
        message: 'invalid file type, must be an image!!',
      };
    }

    if (file.size > maxFileSizeInByte) {
      return { error: true, message: `Max size is 2 MB!!` };
    }

    return { imgId: `${randId()}`, file, error: false };
  }) as ICreateImagePoll.IProps[];

  return uploadedFiles;
};
