import React, { useState } from 'react';
import type { ReactElement, FC } from 'react';
import classNames from 'classnames';
import ImageUpload from '../../atoms/ImageUpload/index';
import UploadingImage from '../../molecules/UploadingImage/UploadingImage';
import {
  alphabet,
  randId,
} from '../../../logic/createImagePoll/createImagePoll';
import { validateUploadedImages } from './validateUploadedImages';
import type { ICreateImagePoll } from './ICreateImagePoll';

const CreateImagePoll: FC = (): ReactElement => {
  const [imagesData, setImagesData] = useState<ICreateImagePoll.IProps[]>([]);

  const singleOption = 1;
  const maxLength = 3;

  const onChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const removeInvalidImages = imagesData.filter((image) => !image.error);

    const validatedFiles = validateUploadedImages(e.target.files);

    setImagesData([...removeInvalidImages, ...validatedFiles]);
  };

  const imgPollClasses = classNames(
    'grid gap-x-2 gap-y-4 rounded-md relative mb-m',
    {
      'grid-cols-1': imagesData.length === singleOption,
      'md:grid-cols-2 grid-cols-1': imagesData.length > singleOption,
    },
  );
  return (
    <>
      <div className={imgPollClasses}>
        {imagesData.map((imgData, index) => {
          return (
            <UploadingImage
              file={imgData.file}
              key={randId()}
              letter={alphabet[index].toUpperCase()}
              id={imgData.imgId}
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
