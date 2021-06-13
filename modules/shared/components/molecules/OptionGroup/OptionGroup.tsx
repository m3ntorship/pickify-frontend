import React from 'react';
import type { FC, ReactElement } from 'react';
import PlusCircle from '../../icons/plusCircle.svg';
import TextDefault from '../TextDefault/TextDefault';
import type { IOptionGroup } from './types/IOptionGroup';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';

const OptionGroup: FC<IOptionGroup.IProps> = ({
  // groupId,
  // onChange,
  options,
  setOptions,
  register,
  formSubmitted,
  reset,
  variantMessage,
  textPollState,
  setTextPollState,
}): ReactElement => {
  const randomId = (): string => {
    const randomHelper = 10000000000;
    return `id_${Math.round(Math.random() * randomHelper)}`;
  };

  const initialOptionsLength = 2;
  const initialIndexAdder = 1;
  const optionsLimit = 26;
  const alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const addOptionHandler = (): void => {
    setOptions([...options, { id: randomId(), value: '' }]);
  };
  const deleteOptionHandler = (optionId: string): void => {
    setOptions(options.filter((option) => option.id !== optionId));
  };

  return (
    <>
      <div className="flex flex-col space-y-2">
        <div className="flex flex-col space-y-2" data-testid="optionsWrapper">
          {options.map((option, index) => (
            <div key={option.id}>
              <TextDefault
                textPollState={textPollState}
                setTextPollState={setTextPollState}
                id={`${option.id}`}
                letter={alphabet[index]}
                deletable={options.length > initialOptionsLength}
                deleteInputHandler={(): void => {
                  deleteOptionHandler(option.id);
                }}
                placeholder={`Option ${index + initialIndexAdder}`}
                register={
                  register && {
                    ...register(option.id, {
                      required: {
                        value: true,
                        message: 'This field is required',
                      },
                      minLength: { value: 3, message: 'Minimum letters is 3' },
                    }),
                  }
                }
                reset={reset}
                variants={
                  formSubmitted
                    ? variantMessage(option.id)
                    : ETextInput.Variants.Default
                }
              />
              {/* {errors[option.id] && (
                <span className="text-error">{errors[option.id].message}</span>
              )} */}
            </div>
          ))}
        </div>
        {options.length < optionsLimit ? (
          <div className="py-2.5">
            <button
              data-testid="addOptionBtn"
              type="button"
              className="text-accent cursor-pointer flex items-center self-start focus:outline-none"
              onClick={(): void => {
                addOptionHandler();
              }}
            >
              <PlusCircle className="fill-accent mr-1 my-3xxs" />
              <span className="text-sm font-medium">Add choice</span>
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default OptionGroup;