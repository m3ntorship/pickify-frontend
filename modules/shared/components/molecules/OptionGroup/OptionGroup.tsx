import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import TextDefault from '../TextDefault/TextDefault';
import type { IOptionGroup } from './types/OptionGroup';

const OptionGroup: FC = (): ReactElement => {
  const [options, setOptions] = useState<IOptionGroup.IOption[]>([
    { id: '1' },
    { id: '2' },
  ]);

  const initialOptionsLength = 2;
  const initialIndexAdder = 1;
  const alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  function deleteInputHandler(optionId: string): void {
    const newOptions: IOptionGroup.IOption[] = options.filter(
      (option) => option.id !== optionId,
    );
    setOptions(newOptions);
  }

  function addOptionHandler(): void {
    const id: number = Math.random();
    setOptions([...options, { id: id.toString() }]);
  }

  return (
    <div className="flex flex-col p-4 bg-grey-bg">
      <input type="text" placeholder="Group Name" />
      {options.map((option, index) => (
        <div className="my-2" key={option.id}>
          <TextDefault
            id={option.id}
            letter={alphabet[index]}
            deletable={options.length > initialOptionsLength}
            deleteInputHandler={(): void => {
              deleteInputHandler(option.id);
            }}
            placeholder={`Option ${index + initialIndexAdder}`}
          />
        </div>
      ))}
      {options.length < alphabet.length ? (
        <button type="button" onClick={addOptionHandler}>
          Add Option
        </button>
      ) : null}
    </div>
  );
};

export default OptionGroup;
