import React, { useState } from 'react';
import type { FC, ReactElement, ChangeEvent } from 'react';
import DragIcon from '../../icons/drag.svg';
import DeleteIcon from '../../icons/delete.svg';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import type { ITextDefault } from './types/TextDefault';
import type { ITextPollCreation } from '../../organisms/TextPollCreation/types/ITextPollCreation';

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
  miniSurveyState,
  setMiniSurveyState,
  // onChange,
}): ReactElement => {
  const [inputVal, setInputVal] = useState('');
  const validationRegister = { ...register };
  const firstGroup = 0;
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputVal(e.target.value);
    if (setTextPollState) {
      setTextPollState({
        ...textPollState,
        groups: [
          {
            name: 'ay 7aga 2',
            options: textPollState?.groups[firstGroup].options.map(
              (option: ITextPollCreation.IOption) => {
                if (option.id === e.target.id) {
                  return { ...option, body: e.target.value };
                }
                return option;
              },
            ),
          },
        ],
      });
    }
    if (setMiniSurveyState && miniSurveyState) {
      setMiniSurveyState({
        ...miniSurveyState,
        groups: miniSurveyState.groups.map((group) => {
          return {
            ...group,
            options: group.options.map((option) => {
              if (option.id === id) {
                return { ...option, body: e.target.value };
              }
              return option;
            }),
          };
        }),
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
                groups: [
                  {
                    name: 'ay 7aga 2',
                    options: textPollState?.groups[firstGroup].options.map(
                      (option) => {
                        if (option.id === id) {
                          return { ...option, body: '' };
                        }
                        return option;
                      },
                    ),
                  },
                ],
              });
            }
            if (setMiniSurveyState && miniSurveyState) {
              setMiniSurveyState({
                ...miniSurveyState,
                groups: miniSurveyState.groups.map((group) => {
                  return {
                    ...group,
                    options: group.options.map((option) => {
                      if (option.id === id) {
                        return { ...option, body: '' };
                      }
                      return option;
                    }),
                  };
                }),
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
