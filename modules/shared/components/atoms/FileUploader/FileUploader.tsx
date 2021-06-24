import React, { useState } from 'react';
import type { ReactElement, FC, ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './FileUploader.module.css';
import Image from '../../icons/image.svg';
import type { IFileUploader } from './IFileUploader';
import { validateUploadedImages } from '../../../logic/uploadedFiles/uploadedFiles';

const FileUploader: FC<IFileUploader.IProps> = ({
  register,
  onFileSuccess,
  onFileError,
  onMaxFilesError,
  maxFiles,
}): ReactElement => {
  const [isFileError, setIsFileError] = useState(false);

  const ImageUploaderRegister = register && {
    ...register('image', {
      required: true,
    }),
  };

  const uploadFilesHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const firstIndex = 0;

    const validatedImages = validateUploadedImages(e.target.files);

    if (validatedImages.length > maxFiles) {
      onMaxFilesError({
        error: true,
        message: `cannot upload more than ${maxFiles} images`,
      });
      setIsFileError(true);
    } else {
      const validImages = validatedImages.filter((image) => !image.error);
      const invalidImages = validatedImages.filter((image) => image.error);
      if (validImages.length > firstIndex) {
        onFileSuccess(validImages);
        setIsFileError(false);
      }
      if (invalidImages.length > firstIndex) {
        onFileError(invalidImages);
        setIsFileError(true);
      }
    }

    ImageUploaderRegister?.onChange(e);
  };

  const inputFileClasses = classNames(styles['container-for-image-upload'], {
    'border-accent bg-grey-shd7': !isFileError,
    'border-error bg-error-shd7': isFileError,
  });

  const textClasses = classNames(styles['text-for-image-upload'], {
    'text-accent': !isFileError,
    'text-error': isFileError,
  });

  const svgClasses = classNames(styles['svg-media-icon'], {
    'fill-accent': !isFileError,
    'fill-error': isFileError,
  });

  return (
    <label className={inputFileClasses} data-testid="file-box" htmlFor="image">
      <span>
        <Image className={svgClasses} />
      </span>
      <p className={textClasses}>Upload one or multiple images</p>
      <input
        type="file"
        id="image"
        accept="images/*"
        multiple
        className={styles['inputfile-for-type-image']}
        {...ImageUploaderRegister}
        onChange={uploadFilesHandler}
        data-testid="file-input"
      />
    </label>
  );
};

export default FileUploader;
