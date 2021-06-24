import React, { useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';
import classNames from 'classnames';
import { useUpdatedImageData } from '../../../hooks/useUpdatedImageData/useUpdatedImageData';
import { useUploadedFiles } from '../../../hooks/useUploadedFiles/useUploadedFiles';
import type { IUploadingImage } from './IUploadingImage';
import styles from './UploadingImage.module.css';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import VerticalThreeDots from '../../icons/verticalThreeDots.svg';
import Misc from '../Misc/Misc';
import { MiscType } from '../Misc/types/EMisc';

const UploadingImage: FC<IUploadingImage.IProps> = ({
  file,
  letter,
  id,
  handleVerticalThreeDotsClick,
  imagesData,
  setImagesData,
}): ReactElement => {
  const [caption, setCaption] = useState<string>('');
  const { error, message } = useUploadedFiles(file as File);
  const url = useUpdatedImageData({
    file,
    imagesData,
    setImagesData,
    id,
    caption,
  });

  useEffect(() => {
    return (): void => {
      const { type } = file as File;
      if (!type) {
        if (error) {
          const filteredImage = imagesData.validImages.filter(
            (image) => image.imgId !== id,
          );
          setImagesData({
            ...imagesData,
            validImages: filteredImage,
          });
        }
      }
    };
  }, [imagesData]);

  const updateImgCaptionHandler = (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    setCaption(e.currentTarget.value);
  };

  const resetCaptionValueHandler = (): void => {
    setCaption('');
  };

  const imgClasses = classNames(styles.image, {
    'filter blur-sm': error,
  });

  return (
    <div className={styles.container} data-testid="uploaded-box">
      <div className={styles['image-container']}>
        <img
          src={url}
          width={300}
          height={300}
          className={imgClasses}
          id={id}
          alt="uploaded option"
        />
        <button
          type="button"
          data-testid="VerticalThreeDots"
          onClick={handleVerticalThreeDotsClick}
          className={styles.button}
        >
          <VerticalThreeDots className="fill-dark-grey" />
        </button>
        {error ? (
          <>
            <div className={styles.layout} />
            <div className={styles['error-box']}>
              <Misc
                msg="Image couldn’t be uploaded!"
                subMsg={message}
                type={MiscType.Error}
              />
            </div>
          </>
        ) : null}
      </div>
      {!error ? (
        <TextInput
          variants={ETextInput.Variants.Default}
          inputType={ETextInput.InputType.Choices}
          letter={letter}
          id={id}
          onChange={updateImgCaptionHandler}
          value={caption}
          placeholder="Type caption (optional)"
          onClick={resetCaptionValueHandler}
        />
      ) : null}
    </div>
  );
};

export default UploadingImage;
