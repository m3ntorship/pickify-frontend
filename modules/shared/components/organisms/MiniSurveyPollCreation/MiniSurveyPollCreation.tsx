import React from 'react';
import type { FC, ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import type { IUploadedFiles } from '../../../logic/uploadedFiles/IUploadedFiles';
import OptionGroups from '../../molecules/OptionGroups/OptionGroups';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import type { IMiniSurveyPollCreation } from './IMiniSurveyPollCreation';
import FileUploader from '../../atoms/FileUploader/FileUploader';
import UploadingImage from '../../molecules/UploadingImage/UploadingImage';
import type { IPostCreationValidationFields } from '../../../types/IPostCreationValidationFields';
import { configPostCreation } from '../../../configuration/ConfigPostCreation/config';

const randomId = (): string => {
  const randomHelper = 10000000000;
  return `id_${Math.round(Math.random() * randomHelper)}`;
};

const MiniSurveyPollCreation: FC<IMiniSurveyPollCreation.IPorps> = ({
  post,
  postCreationGlobalState,
  setPostCreationGlobalState,
}): ReactElement => {
  const zero = 0;
  const one = 1;
  const {
    register,
    setValue,
    getValues,
    formState: { errors, dirtyFields, isSubmitted },
  } = useFormContext<IPostCreationValidationFields.IFields>();

  const miniSurveyCaptionRegister = {
    ...register(`miniSurvey.postCaption.${post.postCaption.id}`, {
      required: true,
      shouldUnregister: true,
    }),
  };

  const inputVariantsHandler = (optionId: string): ETextInput.Variants => {
    if (errors.miniSurvey) {
      if (errors.miniSurvey.postCaption)
        if (errors.miniSurvey.postCaption[optionId])
          return ETextInput.Variants.Error;
    }
    if (
      dirtyFields.miniSurvey &&
      getValues(`miniSurvey.postCaption.${optionId}`)
    ) {
      if (dirtyFields.miniSurvey.postCaption)
        if (dirtyFields.miniSurvey.postCaption[optionId])
          return ETextInput.Variants.Success;
    }

    return ETextInput.Variants.Default;
  };

  const onChangePostCaptionInputValueHandler = (
    inputId: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      miniSurvey: {
        ...post,
        postCaption: { ...post.postCaption, body: e.target.value },
      },
    });
  };

  const onClickDeletePostCaptionInputValueHandler = (): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      miniSurvey: {
        ...post,
        postCaption: { ...post.postCaption, body: '' },
      },
    });
  };

  const addOptionsGroupHandler = (): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      miniSurvey: {
        ...post,
        groups: [
          ...post.groups,
          {
            id: randomId(),
            name: '',
            options: [
              { id: randomId(), body: '', media: [] },
              { id: randomId(), body: '', media: [] },
            ],
            media: [],
          },
        ],
      },
    });
  };

  const deleteOptionsGroupHandler = (groupId: string): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      miniSurvey: {
        ...post,
        groups: post.groups.filter((group) => group.id !== groupId),
      },
    });
  };

  const addOptionHandler = (groupId: string): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      miniSurvey: {
        ...post,
        groups: post.groups.map((group) => {
          if (group.id === groupId) {
            return {
              ...group,
              options: [
                ...group.options,
                { id: randomId(), body: '', media: [] },
              ],
            };
          }
          return group;
        }),
      },
    });
  };
  const deleteOptionHandler = (optionId: string, groupId: string): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      miniSurvey: {
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
  const onChangeOptionValueHandler = (
    optionId: string,
    groupId: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      miniSurvey: {
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
      miniSurvey: {
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

  const updateOptionsGroupNameHandler = (
    groupId: string,
    groupName: string,
  ): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      miniSurvey: {
        ...post,
        groups: post.groups.map((group) => {
          if (group.id === groupId) {
            return { ...group, name: groupName };
          }
          return group;
        }),
      },
    });
  };

  const onUploadValidImages = (images: IUploadedFiles.IImagesData[]): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      miniSurvey: {
        ...post,
        media: [{ id: randomId(), file: images[zero].file }],
      },
    });
  };

  const handleVerticalThreeDotsClick = (): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      miniSurvey: {
        ...post,
        media: [],
      },
    });
  };
  if (post.media.length < one) {
    setValue(`uploadedFilesInpost`, ``);
  }
  return (
    <>
      <div className="space-y-4 mb-4">
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
            miniSurveyCaptionRegister.onChange(e) as Promise<boolean>;
            onChangePostCaptionInputValueHandler(inputId, e);
          }}
          onClickDeleteInputValueHandler={(): void => {
            setValue(`miniSurvey.postCaption.${post.postCaption.id}`, '');
            onClickDeletePostCaptionInputValueHandler();
          }}
          onBlurInputHandler={(_, e): void => {
            miniSurveyCaptionRegister.onBlur(e) as Promise<boolean>;
          }}
          {...miniSurveyCaptionRegister}
        />
        {post.media.length ? (
          <div className="grid gap-x-2 gap-y-4 rounded-md relative mb-m grid-cols-1">
            {post.media.map((med, index) => (
              <UploadingImage
                key={med.id}
                id={med.id}
                index={index}
                file={med.file}
                entityType="option"
                handleVerticalThreeDotsClick={(): void => {
                  handleVerticalThreeDotsClick();
                }}
              />
            ))}
          </div>
        ) : (
          ''
        )}
        {post.media.length < one && (
          <FileUploader
            onFileSuccess={onUploadValidImages}
            maxFiles={configPostCreation.maxUploadFilesMiniSurvey}
            entityType="post"
            lastFilesLength={post.media.length}
          />
        )}

        <OptionGroups
          groups={post.groups}
          addOptionsGroupHandler={addOptionsGroupHandler}
          deleteOptionsGroupHandler={(groupId): void => {
            deleteOptionsGroupHandler(groupId);
          }}
          addOptionHandler={(groupId): void => {
            addOptionHandler(groupId);
          }}
          deleteOptionHandler={(optionId, groupId): void => {
            deleteOptionHandler(optionId, groupId);
          }}
          onBlurOptionHandler={(): boolean => true}
          onChangeOptionValueHandler={(optionId, groupId, e): void => {
            onChangeOptionValueHandler(optionId, groupId, e);
          }}
          onClickDeleteOptionValueHandler={(optionId, groupId): void => {
            onClickDeleteOptionValueHandler(optionId, groupId);
          }}
          updateOptionsGroupNameHandler={(groupId, groupName): void => {
            updateOptionsGroupNameHandler(groupId, groupName);
          }}
        />
      </div>
    </>
  );
};

export default MiniSurveyPollCreation;
