import React from 'react';
import type { ReactElement, FC } from 'react';
import styles from './imageUpload.module.css';
import Image from '../../icons/image.svg';
import type { IImageUpload } from './IImageUpload';

const ImageUpload: FC<IImageUpload.IProps> = ({
  onChangeInputHandler,
}): ReactElement => {
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
          name="filename"
          multiple
          data-testid="image-upload"
          className={styles['inputfile-for-type-image']}
          onChange={onChangeInputHandler}
        />
      </label>
    </>
  );
};

export default ImageUpload;
