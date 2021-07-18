import React from 'react';
import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import type { IImageView } from './IImageView';
import styles from './ImageView.module.css';

const ImageView: FC<IImageView.IProps> = ({
  imgSrc,
  id,
  imgAlt,
}): ReactElement => {
  return (
    <div className={styles['image-view-wrapper']}>
      <div className={styles['bg-image-box']}>
        <Image
          src={imgSrc}
          layout="responsive"
          className={styles['bg-image']}
          objectFit="cover"
          width={600}
          height={600}
          id={id}
          alt={imgAlt}
        />
      </div>
      <Image
        src={imgSrc}
        layout="responsive"
        className={styles.image}
        objectFit="contain"
        width={600}
        height={600}
        id={id}
        alt={imgAlt}
      />
    </div>
  );
};

export default ImageView;
