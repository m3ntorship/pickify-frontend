import React from 'react';
import type { FC, ReactElement } from 'react';
import PlusCircle from '../../icons/plusCircle.svg';
import TextDefault from '../TextDefault/TextDefault';
import type { IOptionGroupCreation } from './types/IOptionGroupCreation';
import OptionGroupsHeader from '../OptionGroupsCreation/OptionGroupsHeader/OptionGroupHeader';

const OptionGroup: FC<IOptionGroupCreation.IProps> = ({
  groupId,
  deleteGroupHandler,
  addOptionHandler,
  deleteOptionHandler,
  options,
}): ReactElement => {
  const initialOptionsLength = 2;
  const initialIndexAdder = 1;
  const optionsLimit = 26;
  const alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return (
    <div className="flex flex-col bg-grey-bg p-4 rounded-md space-y-2">
      <div className="flex justify-between pb-2">
        <OptionGroupsHeader deleteGroupHandler={deleteGroupHandler} />
      </div>
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
              addOptionHandler(groupId);
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
