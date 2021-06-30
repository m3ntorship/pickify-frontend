import React from 'react';
import type { FC, ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import OptionGroup from '../../molecules/OptionGroup/OptionGroup';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import type { ITextPollCreation } from './types/ITextPollCreation';

const randomId = (): string => {
  const randomHelper = 10000000000;
  return `id_${Math.round(Math.random() * randomHelper)}`;
};

const TextPollCreation: FC<ITextPollCreation.IProps> = ({
  post,
  postCreationGlobalState,
  setPostCreationGlobalState,
}): ReactElement => {
  const zero = 0;
  const {
    register,
    setValue,
    getValues,
    formState: { errors, dirtyFields, isSubmitted },
  } = useFormContext<ITextPollCreation.ITextPollMap>();

  const inputVariantsHandler = (optionId: string): ETextInput.Variants => {
    if (errors.textPoll) {
      if (errors.textPoll.postCaption)
        if (errors.textPoll.postCaption[optionId])
          return ETextInput.Variants.Error;
    }
    if (dirtyFields.textPoll && getValues(`textPoll.postCaption.${optionId}`)) {
      if (dirtyFields.textPoll.postCaption)
        if (dirtyFields.textPoll.postCaption[optionId])
          return ETextInput.Variants.Success;
    }

    return ETextInput.Variants.Default;
  };

  const onChangePostCaptionInputValueHandler = (
    _: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      textPoll: {
        ...post,
        postCaption: { ...post.postCaption, body: e.target.value },
      },
    });
  };

  const onClickDeletePostCaptionInputValueHandler = (): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      textPoll: {
        ...post,
        postCaption: { ...post.postCaption, body: '' },
      },
    });
  };

  const addOptionHandler = (): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      textPoll: {
        ...post,
        groups: [
          {
            ...post.groups[zero],
            options: [
              ...post.groups[zero].options,
              { id: randomId(), body: '', media: [] },
            ],
          },
        ],
      },
    });
  };

  const deleteOptionHandler = (optionId: string): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      textPoll: {
        ...post,
        groups: [
          {
            ...post.groups[zero],
            options: post.groups[zero].options.filter(
              (option) => option.id !== optionId,
            ),
          },
        ],
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
      textPoll: {
        ...post,
        groups: [
          {
            ...post.groups[zero],
            options: post.groups[zero].options.map((option) => {
              if (option.id === optionId) {
                return { ...option, body: e.target.value };
              }
              return option;
            }),
          },
        ],
      },
    });
  };

  const onClickDeleteOptionValueHandler = (optionId: string): void => {
    setPostCreationGlobalState({
      ...postCreationGlobalState,
      textPoll: {
        ...post,
        groups: [
          {
            ...post.groups[zero],
            options: post.groups[zero].options.map((option) => {
              if (option.id === optionId) {
                return { ...option, body: '' };
              }
              return option;
            }),
          },
        ],
      },
    });
  };

  const textPollCaptionRegister = {
    ...register(`textPoll.postCaption.${post.postCaption.id}`, {
      required: true,
      shouldUnregister: true,
    }),
  };
  return (
    <div className="space-y-4">
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
          textPollCaptionRegister.onChange(e) as Promise<boolean>;
          onChangePostCaptionInputValueHandler(inputId, e);
        }}
        onClickDeleteInputValueHandler={(): void => {
          setValue(`textPoll.postCaption.${post.postCaption.id}`, '');
          onClickDeletePostCaptionInputValueHandler();
        }}
        onBlurInputHandler={(inputId, e): void => {
          textPollCaptionRegister.onBlur(e) as Promise<boolean>;
        }}
        {...textPollCaptionRegister}
      />
      <OptionGroup
        id={post.groups[zero].id}
        index={zero}
        options={post.groups[zero].options}
        addOptionHandler={(): void => {
          addOptionHandler();
        }}
        deleteOptionHandler={(optionId): void => {
          deleteOptionHandler(optionId);
        }}
        onBlurOptionHandler={(): boolean => true}
        onChangeOptionValueHandler={(optionId, groupId, e): void => {
          onChangeOptionValueHandler(optionId, groupId, e);
        }}
        onClickDeleteOptionValueHandler={(optionId): void => {
          onClickDeleteOptionValueHandler(optionId);
        }}
      />
    </div>
  );
};
export default TextPollCreation;
