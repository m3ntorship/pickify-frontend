import React from 'react';
import type { ReactElement, FC } from 'react';
import styles from './imageUpload.module.css';
import Image from '../../icons/image.svg';
import DropzoneComponent from './DropzoneComponent';

const ImageUpload: FC = (): ReactElement => {
  return (
    <>
      <DropzoneComponent />
      <label htmlFor="image" className={styles.label}>
        <input
          className={styles.inputfile}
          type="file"
          name="image"
          accept="image/*"
          id="image"
          multiple
        />
        <span>
          <Image className={styles.svg} />
        </span>
        <p className={styles.text}> Upload one or multiple images</p>
      </label>
    </>
  );
};

export default ImageUpload;
