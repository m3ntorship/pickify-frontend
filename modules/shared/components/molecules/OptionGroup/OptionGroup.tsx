import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import PlusCircle from '../../icons/plusCircle.svg';
import TextDefault from '../TextDefault/TextDefault';
import type { IOptionGroup } from './types/IOptionGroup';

const OptionGroup: FC<IOptionGroup.IProps> = ({
  id: groupId,
}): ReactElement => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    shouldUnregister: true,
  });
  console.log(groupId);
  const randomId = (): string => {
    const randomHelper = 10000000000;
    return `id_${Math.round(Math.random() * randomHelper)}`;
  };

  const initialOptions: IOptionGroup.IOption[] = [
    { id: randomId(), value: '' },
    { id: randomId(), value: '' },
  ];
  const [options, setOptions] =
    useState<IOptionGroup.IOption[]>(initialOptions);

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

  const onSubmit = (dataObj: Record<string, unknown>): void => {
    setFormSubmitted(true);
    console.log('data', dataObj);
  };
  const onError = (errorsObj: Record<string, unknown>): void => {
    setFormSubmitted(true);
    console.log('errors', errorsObj);
  };
  function variantMessage(optionId: string): string {
    if (errors[optionId]) {
      return 'error';
    }
    if (dirtyFields[optionId]) {
      return 'success';
    }
    return 'default';
  }
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="flex flex-col space-y-2">
        {options.map((option, index) => (
          <div key={option.id}>
            <TextDefault
              id={`${option.id}`}
              letter={alphabet[index]}
              deletable={options.length > initialOptionsLength}
              deleteInputHandler={(): void => {
                deleteOptionHandler(option.id);
              }}
              placeholder={`Option ${index + initialIndexAdder}`}
              register={{
                ...register(option.id, { required: true, minLength: 3 }),
              }}
              reset={reset}
              variants={formSubmitted ? variantMessage(option.id) : ''}
            />
          </div>
        ))}
        {options.length < optionsLimit ? (
          <div className="py-2.5">
            <button
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default OptionGroup;
