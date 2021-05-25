import React from 'react';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import type { IImgCaption } from './IImgCaption';
import styles from './imageCaption.module.css';

const ImageCaption: FC<IImgCaption.IProps> = ({
  imgCaptionLetter,
  imgCaption,
}): ReactElement => {
  // make letter and devider (|) hidden when not pass letter as a props
  const classes = classNames({
    ' hidden ': !imgCaptionLetter,
  });
  return (
    <div className={styles.captionContainer}>
      <div className={styles.captionContent}>
        <span data-testid="captionLetter" className={classes}>
          {imgCaptionLetter}
        </span>

        <div
          data-testid="captionDivider"
          className={styles.captionDivider + classes}
        />

        <span>{imgCaption}</span>
      </div>
    </div>
  );
};

export default ImageCaption;
