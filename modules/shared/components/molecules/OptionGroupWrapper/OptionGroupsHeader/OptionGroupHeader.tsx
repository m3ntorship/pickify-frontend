import React from 'react';
import type { FC, ReactElement } from 'react';
import TextInput from '@modules/shared/components/atoms/TextInputs/TextInput';
import {
  InputType,
  Variants,
} from '@modules/shared/components/atoms/TextInputs/types/ETextInput';
import { useFormContext } from 'react-hook-form';
import type { IPostCreationValidationFields } from '@modules/shared/types/IPostCreationValidationFields';
import DropDown from '@modules/shared/components/atoms/DropDown/DropDown';
import type { IOptionGroupHeader } from './IOptionGroupHeader';
import ThreeDotsIcon from '../../../icons/verticalThreeDots.svg';

import { postCreationMiniSurveyGroupDropDown } from '../../../atoms/DropDown/mockedOptions';

const OptionGroupsHeader: FC<IOptionGroupHeader.IProps> = ({
  id,
  index,
  optionGroupName,
  onChangeOptionsGroupNameValue,
  onClickDeleteOptionsGroupNameValueHandler,
  deleteOptionsGroupHandler,
}): ReactElement => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors, dirtyFields, isSubmitted },
  } = useFormContext<IPostCreationValidationFields.IFields>();

  const inputVariantsHandler = (optionId: string): Variants => {
    if (errors.miniSurvey) {
      if (errors.miniSurvey.groupsNames)
        if (errors.miniSurvey.groupsNames[optionId]) return Variants.Error;
    }
    if (
      dirtyFields.miniSurvey &&
      getValues(`miniSurvey.groupsNames.${optionId}`)
    ) {
      if (dirtyFields.miniSurvey.groupsNames)
        if (dirtyFields.miniSurvey.groupsNames[optionId])
          return Variants.Success;
    }

    return Variants.Default;
  };

  const miniSurveyGroupNameRegister = {
    ...register(`miniSurvey.groupsNames.${id}`, {
      required: true,
      shouldUnregister: true,
    }),
  };

  const onMenuOptionClickHandler = (optionId: string): void => {
    switch (optionId) {
      case 'delete':
        deleteOptionsGroupHandler(id);
        break;
      default:
        console.log('default');
    }
  };
  const marginAllExceptFirstGroup = index > 1 ? 'mr-4' : '';
  return (
    <>
      <div className={`w-full ${marginAllExceptFirstGroup}`}>
        <TextInput
          placeholder="Enter your group’s question"
          id={id}
          inputType={InputType.Default}
          onChangeInputValueHandler={(inputId, e): void => {
            miniSurveyGroupNameRegister.onChange(e) as Promise<boolean>;
            onChangeOptionsGroupNameValue(inputId, e);
          }}
          value={optionGroupName}
          onBlurInputHandler={(_, e): void => {
            miniSurveyGroupNameRegister.onBlur(e) as Promise<boolean>;
          }}
          onClickDeleteInputValueHandler={(): void => {
            setValue(`miniSurvey.groupsNames.${id}`, '');
            onClickDeleteOptionsGroupNameValueHandler(id);
          }}
          variants={isSubmitted ? inputVariantsHandler(id) : Variants.Default}
          {...miniSurveyGroupNameRegister}
        />
      </div>
      {index > 1 && (
        <DropDown
          variant="post"
          options={postCreationMiniSurveyGroupDropDown}
          onOptionMenuClick={onMenuOptionClickHandler}
          size="md"
        >
          <ThreeDotsIcon className="cursor-pointer fill-grey w-4 h-4" />
        </DropDown>
      )}
    </>
  );
};
export default OptionGroupsHeader;
