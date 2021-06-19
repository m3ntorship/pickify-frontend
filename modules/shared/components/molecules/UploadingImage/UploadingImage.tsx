import React, { useState, useEffect, useRef } from 'react';
import type { FC, ReactElement } from 'react';
import classNames from 'classnames';
import type { IUploadingImage } from './IUploadingImage';
import styles from './UploadingImage.module.css';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import VerticalThreeDots from '../../icons/verticalThreeDots.svg';
import Misc from '../Misc/Misc';
import { MiscType } from '../Misc/types/EMisc';

const useIsMounted = (): React.MutableRefObject<boolean> => {
  const isMounted: React.MutableRefObject<boolean> = useRef<boolean>(true);

  useEffect(() => {
    return (): void => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

const useUploadedFiles = (
  uploadedFile: Blob,
): IUploadingImage.IUseUploadedFiles => {
  const [response, setResopnse] = useState<Blob | null>(null);
  const [error, serError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const maxFileSizeInByte = 200_000;

    const promise: Promise<Blob> = new Promise((resolve, reject) => {
      if (uploadedFile.size < maxFileSizeInByte) {
        resolve(uploadedFile);
      } else {
        reject(new Error('Max size is 2 MB!!'));
      }
    });

    promise
      .then((data) => {
        setResopnse(data);
        serError(false);
      })
      .catch((err: Error) => {
        serError(true);
        setMessage(err.message);
      });
  }, []);

  return { response, error, message };
};

const UploadingImage: FC<IUploadingImage.IProps> = ({
  file,
  letter,
  id,
  handleVerticalThreeDotsClick,
  imagePollState,
  setImagePollState,
  imgCaption,
}): ReactElement => {
  const [url, setUrl] = useState<string>('');
  const [caption, setCaption] = useState<string>('');
  const isMounted: React.MutableRefObject<boolean> = useIsMounted();
  const { error, message } = useUploadedFiles(file as Blob);

  const updateImgCaptionHandler = (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    setCaption(e.currentTarget.value);
  };

  const resetCaptionValueHandler = (): void => {
    setCaption('');
  };

  useEffect(() => {
    const resetImagesCaption = imagePollState.validImages.map((image) => {
      if (image.imgId === id) {
        return { ...image, imgCaption: caption };
      }
      return image;
    });
    setImagePollState({
      ...imagePollState,
      validImages: resetImagesCaption,
    });
  }, [caption]);

  useEffect(() => {
    const { type } = file as Blob;
    if (type) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file as Blob);
      fileReader.addEventListener('load', (e) => {
        if (isMounted.current) {
          setUrl(e.target?.result as string);
        }
      });
    }
  }, [file, isMounted]);

  useEffect(() => {
    setCaption(imgCaption);
  }, [imgCaption]);

  useEffect(() => {
    if (url) {
      const uploadedImages = imagePollState.validImages.map((image) => {
        if (image.imgId === id) {
          return { ...image, file: url };
        }
        return image;
      });
      setImagePollState({
        ...imagePollState,
        validImages: uploadedImages,
      });
    }
  }, [url]);

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
