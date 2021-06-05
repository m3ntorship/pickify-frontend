import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import PlusIcon from '../../icons/plus.svg';
import type { IOptionGroups } from './types/IOptionGroups';
import OptionGroup from './OptionGroup/OptionGroup';

const OptionGroups: FC = (): ReactElement => {
  const alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const initialGroupsLength = 0;
  const initialFirstGroupId = 0;
  const initialFirstOptionId = 0;
  const initialSecondOptionId = 1;
  const numberOfRemovedOptions = 1;
  const incrementByOne = 1;
  const decrementByOne = 1;

  const [optionGroups, setOptionGroups] = useState<
    IOptionGroups.IOptionGroup[]
  >([]);

  const addGroupHandler = (): void => {
    const groupId =
      optionGroups.length > initialGroupsLength
        ? optionGroups[optionGroups.length - decrementByOne].id + incrementByOne
        : initialFirstGroupId;
    setOptionGroups([
      ...optionGroups,
      {
        id: groupId,
        options: [
          {
            id: initialFirstOptionId,
            letter: alphabet[initialFirstOptionId],
            value: '',
          },
          {
            id: initialSecondOptionId,
            letter: alphabet[initialSecondOptionId],
            value: '',
          },
        ],
        groupName: `Group ${groupId}`,
      },
    ]);
  };

  const deleteGroupHandler = (id: number): void => {
    setOptionGroups(
      optionGroups.filter((optionGroup) => optionGroup.id !== id),
    );
  };

  const addOptionHandler = (groupId: number): void => {
    let newOptionGroups = [];
    const chosenOptionGroup = optionGroups.find(
      (optionGroup) => optionGroup.id === groupId,
    );
    if (chosenOptionGroup) {
      const newGroup = { ...chosenOptionGroup };
      newGroup.options.push({
        id: newGroup.options.length,
        value: '',
        letter: alphabet[newGroup.options.length],
      });
      newOptionGroups = optionGroups.map((optionGroup) => {
        if (optionGroup.id === groupId) {
          return newGroup;
        }
        return optionGroup;
      });
      setOptionGroups(newOptionGroups);
    }
  };

  const deleteOptionHandler = (groupId: number, optionId: number): void => {
    let newOptionGroups = [];
    const chosenOptionGroup = optionGroups.find(
      (optionGroup) => optionGroup.id === groupId,
    );
    if (chosenOptionGroup) {
      const newGroup = { ...chosenOptionGroup };
      newGroup.options.splice(optionId, numberOfRemovedOptions);
      newOptionGroups = optionGroups.map((optionGroup) => {
        if (optionGroup.id === groupId) {
          return newGroup;
        }
        return optionGroup;
      });
      setOptionGroups(newOptionGroups);
    }
  };

  return (
    <>
      {optionGroups.map((optionGroup) => (
        <div key={`Group${optionGroup.id}`} className="mb-2">
          <OptionGroup
            groupId={optionGroup.id}
            defaultName={optionGroup.groupName}
            deleteGroupHandler={(): void => {
              deleteGroupHandler(optionGroup.id);
            }}
            addOptionHandler={(): void => {
              addOptionHandler(optionGroup.id);
            }}
            deleteOptionHandler={(optionId): void => {
              deleteOptionHandler(optionGroup.id, optionId);
            }}
            options={optionGroup.options}
          />
        </div>
      ))}
      <div className="flex flex-col bg-grey-bg p-4 rounded-md ">
        <button
          type="button"
          className="text-dark-grey cursor-pointer flex items-center self-start focus:outline-none"
          onClick={addGroupHandler}
        >
          <PlusIcon className="fill-dark-grey mr-1 my-3xxs" />
          <span className="text-sm font-medium">Add Option Group</span>
        </button>
      </div>
    </>
  );
};

export default OptionGroups;
