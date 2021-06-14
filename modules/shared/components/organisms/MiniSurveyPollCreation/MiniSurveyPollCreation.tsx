import React, { useState } from 'react';
import type { FC, ReactElement, ChangeEvent, FocusEvent } from 'react';
import { useForm } from 'react-hook-form';
import OptionGroups from '../../molecules/OptionGroups/OptionGroups';
import TextInput from '../../atoms/TextInputs/TextInput';
import PostFooterCreation from '../../molecules/PostFooterCreation/PostFooterCreation';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import type { IMiniSurveyPollCreation } from './IMiniSurveyPollCreation';
import type { IOptionGroup } from '../../molecules/OptionGroup/types/IOptionGroup';

const MiniSurveyPollCreation: FC = (): ReactElement => {
  const randomId = (): string => {
    const randomHelper = 10000000000;
    return `id_${Math.round(Math.random() * randomHelper)}`;
  };

  const [miniSurveyState, setMiniSurveyState] =
    useState<IMiniSurveyPollCreation.IState>({
      postType: 'MiniSurvey Poll',
      postCaption: { id: 'id_123181239', value: '' },
      groups: [
        {
          id: 'G0',
          groupName: '',
          options: [
            { id: 'O0', value: '' },
            { id: 'O1', value: '' },
          ],
        },
      ],
      hiddenIdentity: false,
      privacy: 'friends',
    });

  const {
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields, isSubmitted },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    shouldUnregister: true,
  });

  const onSubmit = (): boolean => {
    console.log(miniSurveyState);
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
    setMiniSurveyState({
      ...miniSurveyState,
      postCaption: {
        ...miniSurveyState.postCaption,
        value: e.target.value,
      },
    });
  };
  console.log('this is getValues', getValues());
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
    setMiniSurveyState({
      ...miniSurveyState,
      hiddenIdentity: e.target.checked,
    });
  };

  const handlePrivacySelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setMiniSurveyState({ ...miniSurveyState, privacy: e.target.value });
  };

  const addGroupHandler = (): void => {
    setMiniSurveyState({
      ...miniSurveyState,
      groups: [
        ...miniSurveyState.groups,
        {
          id: randomId(),
          groupName: '',
          options: [
            { id: randomId(), value: '' },
            { id: randomId(), value: '' },
          ],
        },
      ],
    });
  };

  const deleteGroupHandler = (groupId: string): void => {
    setMiniSurveyState({
      ...miniSurveyState,
      groups: miniSurveyState.groups.filter((group) => group.id !== groupId),
    });
  };

  const setOptionsInGroup = (
    options: IOptionGroup.IOption[],
    groupId: string,
  ): void => {
    setMiniSurveyState({
      ...miniSurveyState,
      groups: miniSurveyState.groups.map((group) => {
        if (groupId === group.id) {
          return { ...group, options };
        }
        return group;
      }),
    });
  };
  return (
    <>
      <div className="space-y-4">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit, onError)}>
          <TextInput
            id="id_123181239"
            value={miniSurveyState.postCaption.value}
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
              setMiniSurveyState({
                ...miniSurveyState,
                postCaption: {
                  ...miniSurveyState.postCaption,
                  value: '',
                },
              });
              reset({ id_123181239: '' });
            }}
            /* eslint-disable @typescript-eslint/no-floating-promises */
            onBlur={(e: FocusEvent<HTMLInputElement>): void => {
              captionInputRegister.onBlur(e);
              setMiniSurveyState({
                ...miniSurveyState,
                postCaption: {
                  ...miniSurveyState.postCaption,
                  value: e.target.value,
                },
              });
            }}
          />
          <OptionGroups
            groups={miniSurveyState.groups}
            register={register}
            isSubmitted={isSubmitted}
            reset={reset}
            errors={errors}
            dirtyFields={dirtyFields}
            variantMessage={variantMessage}
            addOptionGroup={addGroupHandler}
            deleteOptionGroup={deleteGroupHandler}
            setOptionsInGroup={setOptionsInGroup}
          />
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
            togglerIsChecked={miniSurveyState.hiddenIdentity}
          />
        </form>
      </div>
    </>
  );
};

export default MiniSurveyPollCreation;
