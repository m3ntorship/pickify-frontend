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
  const isCaptionLetterNotExt = classNames({
    ' hidden ': imgCaptionLetter === undefined,
  });
  return (
    <div className={styles.captionContainer}>
      {/* content has all styles of text and spaces */}
      <div className={styles.captionContent}>
        {/* letter */}
        <span data-testid="captionLetter" className={isCaptionLetterNotExt}>
          {imgCaptionLetter}
        </span>
        {/* divider (|) */}
        <div
          data-testid="captionDivider"
          className={styles.captionDivider + isCaptionLetterNotExt}
        />
        {/* caption text */}
        <span>{imgCaption}</span>
      </div>
    </div>
  );
};

export default ImageCaption;
