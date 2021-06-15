import React from 'react';
import type { ReactElement, FC, ChangeEvent } from 'react';
import styles from './imageUpload.module.css';
import Image from '../../icons/image.svg';
import type { IImageUpload } from './IImageUpload';

const ImageUpload: FC<IImageUpload.IProps> = ({
  onChangeInputHandler,
  register,
}): ReactElement => {
  const ImageUploaderRegister = register && {
    ...register('image', {
      required: true,
    }),
  };

  return (
    <>
      <label className={styles['container-for-image-upload']} htmlFor="image">
        <span>
          <Image className={styles['svg-media-icon']} />
        </span>
        <p className={styles['text-for-image-upload']}>
          Upload one or multiple images
        </p>
        <input
          type="file"
          id="image"
          accept="images/*"
          multiple
          data-testid="image-upload"
          className={styles['inputfile-for-type-image']}
          {...ImageUploaderRegister}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            ImageUploaderRegister?.onChange(e);
            if (onChangeInputHandler) {
              onChangeInputHandler(e);
            }
          }}
        />
      </label>
    </>
  );
};

export default ImageUpload;
