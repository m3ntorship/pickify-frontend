import React, { useState } from 'react';
import type { ReactElement, FC, ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './imageUpload.module.css';
import Image from '../../icons/image.svg';
import type { IImageUpload } from './IImageUpload';
import { validateUploadedImages } from './uploadedFiles';

const ImageUpload: FC<IImageUpload.IProps> = ({
  register,
  state,
  setState,
  maxFiles,
}): ReactElement => {
  const [isError, setIsError] = useState<boolean>(false);

  const ImageUploaderRegister = register && {
    ...register('image', {
      required: true,
    }),
  };

  const uploadFilesHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const filrstIndex = 0;

    const removedInvalidImages = state.filter((image) => !image.error);
    const validatedFiles = validateUploadedImages(e.target.files);
    const updatedImages = [...removedInvalidImages, ...validatedFiles].slice(
      filrstIndex,
      maxFiles,
    );

    setState(updatedImages);

    validatedFiles.map((file) => {
      if (file.error) {
        setIsError(true);
      } else {
        setIsError(false);
      }
      return file;
    });

    ImageUploaderRegister?.onChange(e);
  };

  const inputFileClasses = classNames(styles['container-for-image-upload'], {
    'border-accent bg-grey-shd7': !isError,
    'border-error bg-error-shd7': isError,
  });

  const textClasses = classNames(styles['text-for-image-upload'], {
    'text-accent': !isError,
    'text-error': isError,
  });

  const svgClasses = classNames(styles['svg-media-icon'], {
    'fill-accent': !isError,
    'fill-error': isError,
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

export default ImageUpload;
