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
import PostFooterCreation from '../../molecules/PostFooterCreation/PostFooterCreation';

const CreateImagePoll: FC = (): ReactElement => {
  const [imagesData, setImagesData] = useState<ICreateImagePoll.IProps[]>([]);

  const [imagePollState, setImagePollState] = useState({
    postType: 'Image Poll',
    postCaption: { id: 'id_123181287', value: '' },
    media: [],
    hiddenIdentity: false,
    privacy: 'friends',
  });
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
  const handleTheRadioButtonOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setImagePollState({ ...imagePollState, hiddenIdentity: e.target.checked });
  };
  const handlePrivacySelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setImagePollState({ ...imagePollState, privacy: e.target.value });
  };
  console.log(imagesData);
  return (
    <>
      <form>
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
                handleTextInputOnBlur={(
                  e: React.FocusEvent<HTMLInputElement>,
                ): void => {
                  setImagesData(
                    imagesData.map((image) => {
                      if (image.imgId === e.target.id) {
                        return {
                          ...image,
                          caption: e.target.value,
                        };
                      }
                      return image;
                    }),
                  );
                  console.log(imagesData);
                }}
              />
            );
          })}
        </div>
        {imagesData.length <= maxLength && (
          <ImageUpload onChangeInputHandler={onChangeHanlder} />
        )}
        <PostFooterCreation
          postButtonIsDisabled={false}
          handleSubmitButtonClick={(): void => {
            console.log('submitted');
          }}
          handleCancelButtonClick={(): void => {
            console.log('canceled');
          }}
          handleTheRadioButtonOnChange={handleTheRadioButtonOnChange}
          handlePrivacySelectChange={handlePrivacySelectChange}
          togglerIsChecked={imagePollState.hiddenIdentity}
        />
      </form>
    </>
  );
};

export default CreateImagePoll;
