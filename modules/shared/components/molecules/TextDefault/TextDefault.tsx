import React, { useState } from 'react';
import type { FC, ReactElement, ChangeEvent } from 'react';
import DragIcon from '../../icons/drag.svg';
import DeleteIcon from '../../icons/delete.svg';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import type { ITextDefault } from './types/TextDefault';
import type { IOptionGroup } from '../OptionGroup/types/IOptionGroup';

const TextDefault: FC<ITextDefault.IProps> = ({
  id,
  letter = '#',
  deletable = false,
  placeholder = '',
  deleteInputHandler,
  register,
  reset,
  variants,
  textPollState,
  setTextPollState,
  // onChange,
}): ReactElement => {
  const [inputVal, setInputVal] = useState('');
  const validationRegister = { ...register };
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputVal(e.target.value);
    if (setTextPollState) {
      setTextPollState({
        ...textPollState,
        options: textPollState?.options.map(
          (option: IOptionGroup.IOption): IOptionGroup.IOption => {
            if (option.id === id) {
              return { ...option, value: e.target.value };
            }
            return option;
          },
        ),
      });
    }
  };
  return (
    <div className="flex items-center" id={`option-${id}-box`}>
      <DragIcon className="mr-3" />
      <span className="flex-1">
        <TextInput
          id={id}
          variants={variants}
          inputType={ETextInput.InputType.Choices}
          letter={letter}
          placeholder={placeholder}
          disabled={false}
          value={inputVal}
          {...register}
          name={validationRegister.name}
          /* eslint-disable @typescript-eslint/no-floating-promises */
          onChange={(e): void => {
            if (validationRegister.onChange) {
              validationRegister.onChange(e);
            }
            handleChange(e);
          }}
          /* eslint-disable @typescript-eslint/no-floating-promises */
          onBlur={(e): void => {
            if (validationRegister.onBlur) {
              validationRegister.onBlur(e);
            }
          }}
          onClick={(): void => {
            setInputVal('');
            if (reset) {
              reset({ [`${id}`]: '' });
            }
            if (setTextPollState) {
              setTextPollState({
                ...textPollState,
                options: textPollState?.options.map(
                  (option: IOptionGroup.IOption) => {
                    if (option.id === id) {
                      return { ...option, value: '' };
                    }
                    return option;
                  },
                ),
              });
            }
          }}
        />
      </span>
      {deletable ? (
        <DeleteIcon
          data-testid="deleteOptionBtn"
          className="ml-3 cursor-pointer"
          onClick={deleteInputHandler}
        />
      ) : null}
    </div>
  );
};

export default TextDefault;
