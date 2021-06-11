import React, { useState } from 'react';
import type { ReactElement, FC } from 'react';
import classNames from 'classnames';
import ImageUpload from '../../atoms/ImageUpload/index';
import styles from './CreateImagePoll.module.css';
import UploadingImage from '../../molecules/UploadingImage/UploadingImage';
import {
  alphabet,
  randId,
} from '../../../logic/createImagePoll/createImagePoll';

interface ImageData {
  caption: string;
  imgId: string;
  file: File;
  error: boolean;
  message: string;
}

const CreateImagePoll: FC = (): ReactElement => {
  const [imagesData, setImagesData] = useState<ImageData[]>([]);

  const singleOption = 1;

  const onChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const numbZero = 0;
    const numbFive = 5;
    const maxFileSizeInByte = 2000000;
    const uploadedFiles = Array.prototype.map.call(
      e.target.files,
      (file: File) => {
        if (file.type.substr(numbZero, numbFive) !== 'image') {
          return { error: true, message: 'invalid file type must be an image' };
        }
        if (file.size > maxFileSizeInByte) {
          return { error: true, message: `Max size is ${file.size} MB` };
        }
        return { imgId: `${randId()}`, file, caption: '', error: false };

        // return file;
      },
    ) as ImageData[];
    setImagesData([...imagesData, ...uploadedFiles]);
  };

  const imgCaptionHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    setImagesData(
      imagesData.map((imageData) => {
        if (imageData.imgId === e.currentTarget.id) {
          return { ...imageData, caption: e.currentTarget.value };
        }
        return imageData;
      }),
    );
  };

  const imgPollClasses = classNames(styles['create-inage-poll'], {
    'grid-cols-1': imagesData.length === singleOption,
    'md:grid-cols-2 grid-cols-1': imagesData.length > singleOption,
  });

  const maxLength = 3;
  return (
    <>
      <div className={imgPollClasses}>
        {imagesData.map((imgData, index) => {
          return (
            <UploadingImage
              file={imgData.file}
              key={randId()}
              textInputLetter={alphabet[index].toUpperCase()}
              id={imgData.imgId}
              filesNumber={imagesData.length}
              textInputValue={imgData.caption}
              imgCaptionHandler={imgCaptionHandler}
              error={imgData.error}
              message={imgData.message}
            />
          );
        })}
      </div>
      {imagesData.length <= maxLength && (
        <ImageUpload onChangeInputHandler={onChangeHanlder} />
      )}
    </>
  );
};

export default CreateImagePoll;
