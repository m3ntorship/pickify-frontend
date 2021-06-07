import React from 'react';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import type { IImageCaption } from './IImageCaption';
import styles from './ImageCaption.module.css';

const ImageCaption: FC<IImageCaption.IProps> = ({
  imgCaptionLetter,
  imgCaption,
}): ReactElement => {
  // make letter and devider (|) hidden when not pass letter as a props
  const captionLetterClasses = classNames({
    ' hidden ': !imgCaptionLetter,
  });
  return (
    <div className={styles.captionContainer}>
      <div className={styles.captionContent}>
        <span className={captionLetterClasses}>{imgCaptionLetter}</span>

        <div className={styles.captionDivider + captionLetterClasses} />

        <span>{imgCaption}</span>
      </div>
    </div>
  );
};

export default ImageCaption;
