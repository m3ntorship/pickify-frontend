import React from 'react';
import type { ReactElement, FC } from 'react';
import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';
import type { IUploadedFiles } from '../../../logic/uploadedFiles/IUploadedFiles';
import FileUploader from '../../atoms/FileUploader/FileUploader';
import UploadingImage from '../../molecules/UploadingImage/UploadingImage';
import type { IImagePollCreation } from './types/ImagePollCreation';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import type { IPostCreationValidationFields } from '../../../types/IPostCreationValidationFields';
import { configPostCreation } from '../../../configuration/ConfigPostCreation/config';
import { symbolGenerator } from '../../../logic/symbolGenerator/symbolGenerator';


const randomId = (): string => {
  const randomHelper = 10000000000;
  return `id_${Math.round(Math.random() * randomHelper)}`;
};

const ImagePollCreation: FC<IImagePollCreation.IProps> = ({
  post,
  postCreationGlobalState,
  setPostCreationGlobalState,
}): ReactElement => {
  const zero = 0;
  const three = 3;
  const singleOption = 1;

  const onUploadValidImages = (images: IUploadedFiles.IImagesData[]): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      imagePoll: {
        ...post,
        groups: post.groups.map((group) => {
          return {
            ...group,
            options: [
              ...group.options,
              ...images.map((img) => {
                const imageId = randomId();
                return {
                  id: imageId,
                  body: '',
                  media: [{ file: img.file, id: imageId }],
                };
              }),
            ],
          };
        }),
      },
    });
  };

  const imgPollClasses = classNames(
    'grid gap-x-2 gap-y-4 rounded-md relative mb-m',
    {
      'grid-cols-1':
        postCreationGlobalState.imagePoll.groups[zero].options.length ===
          singleOption ||
        postCreationGlobalState.imagePoll.groups[zero].media[zero],
      'md:grid-cols-2 grid-cols-1':
        postCreationGlobalState.imagePoll.groups[zero].options.length >
          singleOption &&
        !postCreationGlobalState.imagePoll.groups[zero].media[zero],
    },
  );

  const {
    register,
    formState: { errors, dirtyFields, isSubmitted },
    setValue,
    getValues,
  } = useFormContext<IPostCreationValidationFields.IFields>();

  const inputVariantsHandler = (optionId: string): ETextInput.Variants => {
    if (errors.imagePoll) {
      if (errors.imagePoll.postCaption)
        if (errors.imagePoll.postCaption[optionId])
          return ETextInput.Variants.Error;
    }
    if (
      dirtyFields.imagePoll &&
      getValues(`imagePoll.postCaption.${optionId}`)
    ) {
      if (dirtyFields.imagePoll.postCaption)
        if (dirtyFields.imagePoll.postCaption[optionId])
          return ETextInput.Variants.Success;
    }

    return ETextInput.Variants.Default;
  };

  const onChangePostCaptionInputValueHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      imagePoll: {
        ...post,
        postCaption: { ...post.postCaption, body: e.target.value },
      },
    });
  };

  const onClickDeletePostCaptionInputValueHandler = (): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      imagePoll: {
        ...post,
        postCaption: { ...post.postCaption, body: '' },
      },
    });
  };

  const onChangeOptionValueHandler = (
    optionId: string,
    groupId: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      imagePoll: {
        ...post,
        groups: post.groups.map((group) => {
          if (group.id === groupId) {
            return {
              ...group,
              options: group.options.map((option) => {
                if (option.id === optionId) {
                  return { ...option, body: e.target.value };
                }
                return option;
              }),
            };
          }
          return group;
        }),
      },
    });
  };
  const onClickDeleteOptionValueHandler = (
    optionId: string,
    groupId: string,
  ): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      imagePoll: {
        ...post,
        groups: post.groups.map((group) => {
          if (group.id === groupId) {
            return {
              ...group,
              options: group.options.map((option) => {
                if (option.id === optionId) {
                  return { ...option, body: '' };
                }
                return option;
              }),
            };
          }
          return group;
        }),
      },
    });
  };

  const handleVerticalThreeDotsClick = (
    optionId: string,
    groupId: string,
  ): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      imagePoll: {
        ...post,
        groups: post.groups.map((group) => {
          if (group.id === groupId) {
            return {
              ...group,
              options: group.options.filter((option) => option.id !== optionId),
            };
          }
          return group;
        }),
      },
    });
  };
  if (post.groups[zero].options.length === zero) {
    setValue(`uploadedFilesInoption`, '');
  }
  const imagePollCaptionRegister = {
    ...register(`imagePoll.postCaption.${post.postCaption.id}`, {
      required: true,
      shouldUnregister: true,
    }),
  };
  return (
    <>
      <div className="mb-4">
        <TextInput
          id={post.postCaption.id}
          inputType={ETextInput.InputType.Default}
          value={post.postCaption.body}
          placeholder="What do you want to ask about?"
          variants={
            isSubmitted
              ? inputVariantsHandler(post.postCaption.id)
              : ETextInput.Variants.Default
          }
          onChangeInputValueHandler={(inputId, e): void => {
            imagePollCaptionRegister.onChange(e) as Promise<boolean>;
            onChangePostCaptionInputValueHandler(e);
          }}
          onClickDeleteInputValueHandler={(): void => {
            setValue(`imagePoll.postCaption.${post.postCaption.id}`, '');
            onClickDeletePostCaptionInputValueHandler();
          }}
          onBlurInputHandler={(inputId, e): void => {
            imagePollCaptionRegister.onBlur(e) as Promise<boolean>;
          }}
          {...imagePollCaptionRegister}
        />
      </div>
      {postCreationGlobalState.imagePoll.groups[zero].options.length ? (
        <div className={imgPollClasses}>
          {postCreationGlobalState.imagePoll.groups[zero].media[zero]
            ? postCreationGlobalState.imagePoll.groups.map(
                ({ name, media }) => (
                  <UploadingImage
                    key={media[zero].id}
                    id={media[zero].id}
                    index={zero}
                    file={media[zero].file}
                    entityType="option"
                    handleVerticalThreeDotsClick={(optionId): void => {
                      handleVerticalThreeDotsClick(
                        optionId,
                        post.groups[zero].id,
                      );
                    }}
                  >
                    <TextInput
                      id={media[zero].id}
                      inputType={ETextInput.InputType.Choices}
                      variants={
                        isSubmitted
                          ? inputVariantsHandler(media[zero].id)
                          : ETextInput.Variants.Default
                      }
                      value={name}
                      placeholder="Type caption (optional)"
                      letter={symbolGenerator(zero)}
                      onClickDeleteInputValueHandler={(): void => {
                        setValue(`options.${media[zero].id}`, '');
                        onClickDeleteOptionValueHandler(
                          media[zero].id,
                          post.groups[zero].id,
                        );
                      }}
                      onChangeInputValueHandler={(inputId, e): void => {
                        onChangeOptionValueHandler(
                          inputId,
                          post.groups[zero].id,
                          e,
                        );
                      }}
                      onBlurInputHandler={(): boolean => true}
                    />
                  </UploadingImage>
                ),
              )
            : postCreationGlobalState.imagePoll.groups[zero].options.map(
                (option, index) => (
                  <UploadingImage
                    key={option.id}
                    id={option.id}
                    index={index}
                    file={option.media[zero].file}
                    entityType="option"
                    handleVerticalThreeDotsClick={(optionId): void => {
                      handleVerticalThreeDotsClick(
                        optionId,
                        post.groups[zero].id,
                      );
                    }}
                  >
                    <TextInput
                      id={option.id}
                      inputType={ETextInput.InputType.Choices}
                      variants={
                        isSubmitted
                          ? inputVariantsHandler(option.id)
                          : ETextInput.Variants.Default
                      }
                      value={option.body}
                      placeholder="Type caption (optional)"
                      letter={symbolGenerator(index)}
                      onClickDeleteInputValueHandler={(): void => {
                        setValue(`options.${option.id}`, '');
                        onClickDeleteOptionValueHandler(
                          option.id,
                          post.groups[zero].id,
                        );
                      }}
                      onChangeInputValueHandler={(inputId, e): void => {
                        onChangeOptionValueHandler(
                          inputId,
                          post.groups[zero].id,
                          e,
                        );
                      }}
                      onBlurInputHandler={(): boolean => true}
                    />
                  </UploadingImage>
                ),
              )}
        </div>
      ) : (
        ''
      )}
      {postCreationGlobalState.imagePoll.groups[zero].options.length <=
        three && (
        <div className="mb-4">
          <FileUploader
            onFileSuccess={onUploadValidImages}
            maxFiles={configPostCreation.maxUploadedFiles}
            entityType="option"
            lastFilesLength={
              postCreationGlobalState.imagePoll.groups[zero].options.length
            }
          />
        </div>
      )}
    </>
  );
};

export default ImagePollCreation;
