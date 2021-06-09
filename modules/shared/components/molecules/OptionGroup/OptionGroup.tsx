import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import PlusCircle from '../../icons/plusCircle.svg';
import TextDefault from '../TextDefault/TextDefault';
import type { IOptionGroup } from './types/IOptionGroup';

const OptionGroup: FC<IOptionGroup.IProps> = ({
  id: groupId,
}): ReactElement => {
  const { register, handleSubmit } = useForm({ shouldUnregister: true });
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

  const onSubmit = (data: Record<string, unknown>): void => {
    console.log('data', data);
  };
  const onError = (errors: Record<string, unknown>): void => {
    console.log('errors', errors);
  };
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
              register={{ ...register(option.id, { required: true }) }}
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
