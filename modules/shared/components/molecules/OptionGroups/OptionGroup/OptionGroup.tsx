import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import TextDefault from '../../TextDefault/TextDefault';
import type { IOptionGroup } from './types/IOptionGroup';
import ThreeDotsIcon from '../../../icons/verticalThreeDots.svg';
import CheckSmall from '../../../icons/checkMarkSmall.svg';
import XIcon from '../../../icons/xicon.svg';
import PlusCircle from '../../../icons/plusCircle.svg';

const OptionGroup: FC<IOptionGroup.IProps> = ({
  groupId,
  defaultName,
  deleteGroupHandler,
  addOptionHandler,
  deleteOptionHandler,
  options,
}): ReactElement => {
  const [groupName, setGroupName] = useState<string>(defaultName);
  const [isGroupNameAdded, setIsGroupNameAdded] = useState<boolean>(true);
  const initialOptionsLength = 2;
  const initialIndexAdder = 1;
  const optionsLimit = 26;

  return (
    <div className="flex flex-col bg-grey-bg p-4 rounded-md">
      <div className="flex justify-between pb-2 mb-2">
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
                onClick={deleteGroupHandler}
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
            <span className="text-dark-grey font-normal text-sm">
              {groupName}
            </span>
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
        <div className="mb-2" key={option.id}>
          <TextDefault
            id={`${option.id}`}
            letter={option.letter}
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
