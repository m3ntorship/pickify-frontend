import React, { useEffect, useState } from 'react';
import type { FC, ReactElement, ChangeEvent, FocusEvent } from 'react';
import { useForm } from 'react-hook-form';

import { postsApi } from '@modules/shared/api/postsApi.api';
import type {
  PostCreationRequestTypeEnum,
  OptionsGroupCreation,
} from '@m3ntorship/posts-client/dist/client';
import OptionGroup from '../../molecules/OptionGroup/OptionGroup';
import type { IOptionGroup } from '../../molecules/OptionGroup/types/IOptionGroup';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import type { ITextPollCreation } from './types/ITextPollCreation';
import PostFooterCreation from '../../molecules/PostFooterCreation/PostFooterCreation';

export interface Post {
  postType: PostCreationRequestTypeEnum;
  postCaption: OptionsEntityOrPostCaption;
  options?: OptionsEntityOrPostCaption[] | null;
  hiddenIdentity: boolean;
  privacy: string;
}
export interface OptionsEntityOrPostCaption {
  id: string;
  value: string;
}

// const getTextPollOptionGroup = (post: Post): OptionsGroupCreation => {
//   const options = post.options?.map((option: OptionsEntityOrPostCaption) => {
//     return { body: option.value };
//   });

//   return {
//     groups: options,
//   };
// };

const createPostTemporarly = async (post: Post): Promise<void> => {
  const {
    data: { id: postId },
  } = await postsApi.createPost({
    is_hidden: post.hiddenIdentity,
    type: post.postType,
    caption: post.postCaption.value,
  });

  const firstOption = post.options[0] || { value: '' };
  const secondOption = post.options[1] || { value: '' };

  const groups: OptionsGroupCreation = {
    groups: [
      {
        name: 'text poll name',
        options: [
          {
            body: firstOption.value,
          },
          {
            body: secondOption.value,
          },
        ],
      },
    ],
  };

  const optionResponse = await postsApi.createOptionsGroup(postId, groups);
  console.log(optionResponse);

  const flagResponse = await postsApi.flagPostAsFinished(postId, {
    finished: true,
  });
  console.log(flagResponse);
};

const TextPollCreation: FC = (): ReactElement => {
  const randomId = (): string => {
    const randomHelper = 10000000000;
    return `id_${Math.round(Math.random() * randomHelper)}`;
  };

  const [options, setOptions] = useState<IOptionGroup.IOption[]>([]);

  // const [captionInputVal, setCaptionInputVal] = useState<string>('');
  const [textPollState, setTextPollState] = useState<ITextPollCreation.IState>({
    postType: 'Text Poll',
    postCaption: { id: 'id_123181239', value: '' },
    options,
    hiddenIdentity: false,
    privacy: 'friends',
  });

  useEffect(() => {
    setOptions([
      { id: randomId(), value: '' },
      { id: randomId(), value: '' },
    ]);
  }, []);

  useEffect(() => {
    setTextPollState({ ...textPollState, options });
  }, [options]);

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
  const onSubmit = (): boolean => {
    console.log(JSON.stringify(textPollState));
    createPostTemporarly(textPollState);

    return true;
  };
  const onError = (): boolean => {
    return true;
  };
  const variantMessage = (optionId: string): ETextInput.Variants => {
    if (errors[optionId]) {
      return ETextInput.Variants.Error;
    }
    if (dirtyFields[optionId]) {
      return ETextInput.Variants.Success;
    }

    return ETextInput.Variants.Default;
  };
  const changeCaptionInputValueHandler = (
    e: ChangeEvent<HTMLInputElement>,
  ): void => {
    setTextPollState({
      ...textPollState,
      postCaption: {
        ...textPollState.postCaption,
        value: e.target.value,
      },
    });
  };
  const captionInputRegister = {
    ...register('id_123181239', {
      required: {
        value: true,
        message: 'This field is required',
      },
      minLength: { value: 3, message: 'Minimum letters is 3' },
    }),
  };

  const handleTheRadioButtonOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setTextPollState({ ...textPollState, hiddenIdentity: e.target.checked });
  };
  const handlePrivacySelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setTextPollState({ ...textPollState, privacy: e.target.value });
  };

  return (
    <>
      <div className="space-y-4">
        <form
          className="space-y-4"
          onBlur={(e: FocusEvent<HTMLFormElement>): void => {
            setTextPollState({
              ...textPollState,
              options: textPollState.options.map(
                (option: IOptionGroup.IOption): IOptionGroup.IOption => {
                  if (option.id === e.target.id) {
                    const inputValue = e.target.value as string;
                    return { ...option, value: inputValue };
                  }
                  return option;
                },
              ),
            });
          }}
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <TextInput
            id="id_123181239"
            value={textPollState.postCaption.value}
            variants={
              isSubmitted
                ? variantMessage('id_123181239')
                : ETextInput.Variants.Default
            }
            inputType={ETextInput.InputType.Default}
            placeholder="What do you want  to ask about?"
            disabled={false}
            {...captionInputRegister}
            /* eslint-disable @typescript-eslint/no-floating-promises */
            onChange={(e: ChangeEvent<HTMLInputElement>): void => {
              changeCaptionInputValueHandler(e);
              captionInputRegister.onChange(e);
            }}
            onClick={(): void => {
              setTextPollState({
                ...textPollState,
                postCaption: {
                  ...textPollState.postCaption,
                  value: '',
                },
              });
              reset({ id_123181239: '' });
            }}
            /* eslint-disable @typescript-eslint/no-floating-promises */
            onBlur={(e: FocusEvent<HTMLInputElement>): void => {
              captionInputRegister.onBlur(e);
              setTextPollState({
                ...textPollState,
                postCaption: {
                  ...textPollState.postCaption,
                  value: e.target.value,
                },
              });
            }}
          />
          <OptionGroup
            groupId="0"
            options={textPollState.options}
            setOptions={setOptions}
            variantMessage={variantMessage}
            register={register}
            formSubmitted={isSubmitted}
            reset={reset}
            errors={errors}
            dirtyFields={dirtyFields}
            textPollState={textPollState}
            setTextPollState={setTextPollState}
          />
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
            togglerIsChecked={textPollState.hiddenIdentity}
          />
        </form>
      </div>
    </>
  );
};
export default TextPollCreation;
