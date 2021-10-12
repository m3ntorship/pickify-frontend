import React from 'react';
import type { FC, ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import DragIcon from '../../icons/drag.svg';
import DeleteIcon from '../../icons/delete.svg';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import type { IOption } from './types/Option';
import { symbolGenerator } from '../../../logic/symbolGenerator/symbolGenerator';

const Option: FC<IOption.IProps> = ({
  id,
  index,
  deletable = false,
  optionValue,
  onChangeOptionValueHandler,
  onClickDeleteOptionValueHandler,
  onBlurOptionHandler,
  deleteOptionHandler,
}): ReactElement => {
  const one = 1;
  const {
    register,
    setValue,
    getValues,
    formState: { errors, dirtyFields, isSubmitted },
  } = useFormContext<IOption.IOptionsMap>();

  const optionRegister = {
    ...register(`options.${id}`, {
      required: true,
      shouldUnregister: true,
    }),
  };

  const inputVariantsHandler = (optionId: string): ETextInput.Variants => {
    if (errors.options) {
      if (errors.options[optionId]) return ETextInput.Variants.Error;
    }
    if (dirtyFields.options && getValues(`options.${optionId}`)) {
      if (dirtyFields.options[optionId]) return ETextInput.Variants.Success;
    }

    return ETextInput.Variants.Default;
  };

  const onClickDeleteInputValueHandler = (optionId: string): void => {
    // reset({ options: { [`${optionId}`]: '' } });
    setValue(`options.${optionId}`, '');
    onClickDeleteOptionValueHandler(optionId);
  };

  const onChangeInputValueHandler = (
    inputId: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    optionRegister.onChange(e) as Promise<boolean>;
    onChangeOptionValueHandler(inputId, e);
  };

  const onBlurInputHandler = (
    inputId: string,
    e: React.FocusEvent<HTMLInputElement>,
  ): void => {
    optionRegister.onBlur(e) as Promise<boolean>;
    onBlurOptionHandler(inputId, e);
  };

  return (
    <div className="flex items-center" id={`option-${id}-box`}>
      <button
        type="button"
        className="mr-3 cursor-move"
        data-testid="dragOptionBtn"
      >
        <DragIcon />
      </button>
      <span className="flex-1">
        <TextInput
          id={id}
          inputType={ETextInput.InputType.Choices}
          variants={
            isSubmitted ? inputVariantsHandler(id) : ETextInput.Variants.Default
          }
          value={optionValue}
          placeholder={`Option ${index + one}`}
          letter={symbolGenerator(index)}
          onClickDeleteInputValueHandler={(): void => {
            onClickDeleteInputValueHandler(id);
          }}
          onChangeInputValueHandler={(inputId, e): void => {
            onChangeInputValueHandler(inputId, e);
          }}
          onBlurInputHandler={(inputId, e): void => {
            onBlurInputHandler(inputId, e);
          }}
          {...optionRegister}
        />
      </span>
      {deletable && (
        <button
          type="button"
          onClick={(): void => {
            deleteOptionHandler(id);
          }}
          className="ml-3 cursor-pointer"
        >
          <DeleteIcon data-testid="deleteOptionBtn" />
        </button>
      )}
    </div>
  );
};

export default Option;
