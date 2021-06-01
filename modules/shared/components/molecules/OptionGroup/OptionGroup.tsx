import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import TextDefault from '../TextDefault/TextDefault';
import type { IOptionGroup } from './types/IOptionGroup';
import ThreeDotsIcon from '../../icons/verticalThreeDots.svg';
import CheckSmall from '../../icons/checkMarkSmall.svg';
import XIcon from '../../icons/xicon.svg';
import PlusCircle from '../../icons/plusCircle.svg';

const OptionGroup: FC<IOptionGroup.IProps> = ({
  handleGroupDelete,
}): ReactElement => {
  const [options, setOptions] = useState<IOptionGroup.IOption[]>([
    { id: '1' },
    { id: '2' },
  ]);
  const [groupName, setGroupName] = useState<string>('');
  const [isGroupNameAdded, setIsGroupNameAdded] = useState<boolean>(false);
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
    <div className="flex flex-col bg-grey-bg p-4">
      <div className="flex justify-between">
        {!isGroupNameAdded ? (
          <>
            <input
              type="text"
              placeholder="Group name"
              className="focus:outline-none pr-1 bg-accent-shd7 text-sm text-dark max-w-12xl w-full"
              value={groupName}
              onChange={(e): void => {
                setGroupName(e.target.value);
              }}
            />

            <div className="flex">
              <button
                type="button"
                className="h-4 w-4 bg-error-shd7 focus:outline-none rounded-full flex justify-center items-center mr-xs"
                onClick={handleGroupDelete}
              >
                <XIcon className="fill-error" />
              </button>
              <button
                type="button"
                className="h-4 w-4 bg-success-shd7 focus:outline-none rounded-full flex justify-center items-center"
                onClick={(): void => {
                  setIsGroupNameAdded(true);
                }}
              >
                <CheckSmall className="fill-success" />
              </button>
            </div>
          </>
        ) : (
          <>
            <span className="text-dark-grey font-normal">{groupName}</span>
            <ThreeDotsIcon
              className="cursor-pointer"
              onClick={(): void => {
                setIsGroupNameAdded(false);
              }}
            />
          </>
        )}
      </div>
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
        <button
          type="button"
          className="text-accent cursor-pointer flex items-center self-start focus:outline-none"
          onClick={addOptionHandler}
        >
          <PlusCircle className="fill-accent mr-1 my-3xxs" />
          <span className="text-sm font-medium">Add choice</span>
        </button>
      ) : null}
    </div>
  );
};

export default OptionGroup;
