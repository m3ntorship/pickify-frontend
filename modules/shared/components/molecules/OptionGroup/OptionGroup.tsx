import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import PlusCircle from '../../icons/plusCircle.svg';
import TextDefault from '../TextDefault/TextDefault';
import type { IOptionGroup } from './types/IOptionGroup';
// import OptionGroupsHeader from '../OptionGroupsCreation/OptionGroupsHeader/OptionGroupHeader';

const OptionGroup: FC<IOptionGroup.IProps> = ({
  id: groupId,
}): ReactElement => {
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

  return (
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
  );
};

export default OptionGroup;
