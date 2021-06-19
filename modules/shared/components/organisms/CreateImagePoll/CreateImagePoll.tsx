import React, { useState } from 'react';
import type { ReactElement, FC } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import type { IUploadedFiles } from '@modules/shared/logic/uploadedFiles/IUploadedFiles';
import FileUploader from '../../atoms/FileUploader/FileUploader';
import UploadingImage from '../../molecules/UploadingImage/UploadingImage';
import {
  alphabet,
  randId,
} from '../../../logic/createImagePoll/createImagePoll';
import type { ICreateImagePoll } from './ICreateImagePoll';
import PostFooterCreation from '../../molecules/PostFooterCreation/PostFooterCreation';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import { MiscType } from '../../molecules/Misc/types/EMisc';
import Misc from '../../molecules/Misc/Misc';

const CreateImagePoll: FC = (): ReactElement => {
  const [imagePollState, setImagePollState] = useState<ICreateImagePoll.IProps>(
    {
      postType: 'Image Poll',
      postCaption: { id: 'id_123181287', value: '' },
      validImages: [],
      hiddenIdentity: false,
      privacy: 'friends',
    },
  );
  const [invalidImages, setInvalidImages] = useState<
    ICreateImagePoll.InvalidImages[]
  >([]);
  const [maxFilesError, setMaxFilesError] =
    useState<ICreateImagePoll.InvalidImages>({ error: false, message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields, isSubmitted },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    shouldUnregister: true,
  });

  const firstIndex = 0;
  const singleOption = 1;
  const maxLength = 3;

  const onUploadValidImages = (images: IUploadedFiles.IImagesData[]): void => {
    const newValidImages = images.map((img) => {
      const imageData = {
        imgId: `${randId()}`,
        imgCaption: '',
        file: img.file,
      };
      return imageData;
    });

    setImagePollState({
      ...imagePollState,
      validImages: [
        ...imagePollState.validImages,
        ...newValidImages,
      ] as ICreateImagePoll.ValidImages[],
    });
    setInvalidImages([]);
    setMaxFilesError({ error: false, message: '' });
  };
  const onUploadInvalidImages = (
    images: IUploadedFiles.IImagesData[],
  ): void => {
    const newInvalidImages = images.map((img) => {
      const imageData = {
        imgId: `${randId()}`,
        error: img.error,
        message: img.message,
      };
      return imageData;
    });

    setInvalidImages([...invalidImages, ...newInvalidImages]);
    setMaxFilesError({ error: false, message: '' });
  };
  const onUploadMaxLimitImages = (maxLimitImage: {
    error: boolean;
    message: string;
  }): void => {
    setMaxFilesError({
      error: maxLimitImage.error,
      message: maxLimitImage.message,
    });
  };

  const captionInputRegister = {
    ...register('id_123181287', {
      required: {
        value: true,
        message: 'This field is required',
      },
      minLength: { value: 3, message: 'Minimum letters is 3' },
    }),
  };

  const updatePostCaptionHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setImagePollState({
      ...imagePollState,
      postCaption: { ...imagePollState.postCaption, value: e.target.value },
    });
    /* eslint-disable @typescript-eslint/no-floating-promises */
    captionInputRegister.onChange(e);
  };

  const resetPostCaptionHandler = (): void => {
    setImagePollState({
      ...imagePollState,
      postCaption: { ...imagePollState.postCaption, value: '' },
    });
    reset({ id_123181239: '' });
  };

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

  const onSubmit = (): void => {
    if (imagePollState.validImages.length !== firstIndex) {
      console.log(imagePollState);
    }
  };

  const variantMessage = (captionId: string): ETextInput.Variants => {
    if (errors[captionId]) {
      return ETextInput.Variants.Error;
    }
    if (dirtyFields[captionId]) {
      return ETextInput.Variants.Success;
    }

    return ETextInput.Variants.Default;
  };

  const imgPollClasses = classNames(
    'grid gap-x-2 gap-y-4 rounded-md relative mb-m',
    {
      'grid-cols-1':
        imagePollState.validImages.length === singleOption ||
        invalidImages.length === singleOption,
      'md:grid-cols-2 grid-cols-1':
        imagePollState.validImages.length > singleOption ||
        invalidImages.length > singleOption,
    },
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <TextInput
          id={imagePollState.postCaption.id}
          onClick={resetPostCaptionHandler}
          value={imagePollState.postCaption.value}
          inputType={ETextInput.InputType.Default}
          variants={
            isSubmitted
              ? variantMessage('id_123181287')
              : ETextInput.Variants.Default
          }
          placeholder="What do you want to ask about?"
          {...captionInputRegister}
          onChange={updatePostCaptionHandler}
        />
      </div>
      {imagePollState.validImages.length ? (
        <div className={imgPollClasses}>
          {imagePollState.validImages.map((imgData, index) => {
            return (
              <UploadingImage
                file={imgData.file}
                key={imgData.imgId}
                letter={alphabet[index].toUpperCase()}
                id={imgData.imgId}
                imagePollState={imagePollState}
                setImagePollState={setImagePollState}
              />
            );
          })}
        </div>
      ) : (
        ''
      )}
      {invalidImages.length ? (
        <div className={imgPollClasses}>
          {invalidImages.map((imgData) => {
            return (
              <Misc
                key={imgData.imgId}
                msg="Image couldn’t be uploaded!"
                subMsg={imgData.message}
                type={MiscType.Error}
              />
            );
          })}
        </div>
      ) : (
        ''
      )}
      {maxFilesError.error && (
        <Misc
          msg="Images couldn’t be uploaded!"
          subMsg={maxFilesError.message}
          type={MiscType.Error}
        />
      )}
      {imagePollState.validImages.length <= maxLength && (
        <FileUploader
          onFileSuccess={onUploadValidImages}
          onFileError={onUploadInvalidImages}
          onMaxFilesError={onUploadMaxLimitImages}
          maxFiles={4}
        />
      )}
      <PostFooterCreation
        postButtonIsDisabled={false}
        handleSubmitButtonClick={(): void => {
          console.log('post button clicked');
        }}
        handleCancelButtonClick={(): void => {
          console.log('cancel button clicked');
        }}
        handleTheRadioButtonOnChange={handleTheRadioButtonOnChange}
        handlePrivacySelectChange={handlePrivacySelectChange}
        togglerIsChecked={imagePollState.hiddenIdentity}
      />
    </form>
  );
};

export default CreateImagePoll;
