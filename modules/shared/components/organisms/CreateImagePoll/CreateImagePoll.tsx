import React, { useState, useEffect } from 'react';
import type { ReactElement, FC } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import type { IUploadedFiles } from '@modules/shared/logic/uploadedFiles/IUploadedFiles';
import ImageUpload from '../../atoms/ImageUpload/index';
import UploadingImage from '../../molecules/UploadingImage/UploadingImage';
import {
  alphabet,
  randId,
} from '../../../logic/createImagePoll/createImagePoll';
import type { ICreateImagePoll } from './ICreateImagePoll';
import PostFooterCreation from '../../molecules/PostFooterCreation/PostFooterCreation';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';

const CreateImagePoll: FC = (): ReactElement => {
  const [imagePollState, setImagePollState] = useState<ICreateImagePoll.IProps>(
    {
      postType: 'Image Poll',
      postCaption: { id: 'id_123181287', value: '' },
      imagesData: [],
      hiddenIdentity: false,
      privacy: 'friends',
    },
  );
  const [imageFiles, setImageFiles] = useState<IUploadedFiles.IImagesData[]>(
    [],
  );

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

  useEffect(() => {
    setImagePollState({ ...imagePollState, imagesData: imageFiles });
  }, [imageFiles]);

  const imgPollClasses = classNames(
    'grid gap-x-2 gap-y-4 rounded-md relative mb-m',
    {
      'grid-cols-1': imagePollState.imagesData.length === singleOption,
      'md:grid-cols-2 grid-cols-1':
        imagePollState.imagesData.length > singleOption,
    },
  );

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
    if (imagePollState.imagesData.length !== firstIndex) {
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
      {imagePollState.imagesData.length ? (
        <div className={imgPollClasses}>
          {imagePollState.imagesData.map((imgData, index) => {
            return (
              <UploadingImage
                file={imgData.file}
                key={randId()}
                letter={alphabet[index].toUpperCase()}
                id={imgData.imgId}
                error={imgData.error}
                message={imgData.message}
                imagePollState={imagePollState}
                setImagePollState={setImagePollState}
                imgCaption={imgData.imgCaption}
              />
            );
          })}
        </div>
      ) : (
        ''
      )}
      {imagePollState.imagesData.length <= maxLength && (
        <ImageUpload files={imageFiles} setFiles={setImageFiles} maxFiles={4} />
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
