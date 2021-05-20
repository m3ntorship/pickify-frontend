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
      <label className={styles.label} htmlFor="image">
        <span className={styles.span}>
          <Image className={styles.svg} />
        </span>
        <p className={styles.text}> Upload one or multiple images </p>
        <input
          type="file"
          id="image"
          accept="images/*"
          name="filename"
          multiple
          data-testid="image-upload"
          className={styles.inputfile}
          onChange={onChangeInputHandler}
        />
      </label>
    </>
  );
};

export default ImageUpload;
