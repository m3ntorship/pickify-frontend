import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import PlusIcon from '../../icons/plus.svg';
import type { IOptionGroups } from './types/IOptionGroups';
import OptionGroup from './OptionGroup/OptionGroup';

const OptionGroups: FC = (): ReactElement => {
  const alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const initialFirstOptionId = 0;
  const initialSecondOptionId = 1;

  const [optionGroups, setOptionGroups] = useState<
    IOptionGroups.IOptionGroup[]
  >([]);
  const randomId = (): string => {
    const randomHelper = 10000000000;
    return `id_${Math.round(Math.random() * randomHelper)}`;
  };
  const addGroupHandler = (): void => {
    setOptionGroups([
      ...optionGroups,
      {
        id: randomId(),
        options: [
          {
            id: randomId(),
            letter: alphabet[initialFirstOptionId],
            value: '',
          },
          {
            id: randomId(),
            letter: alphabet[initialSecondOptionId],
            value: '',
          },
        ],
        groupName: `Group 0`,
      },
    ]);
  };

  const deleteGroupHandler = (id: string): void => {
    setOptionGroups(
      optionGroups.filter((optionGroup) => optionGroup.id !== id),
    );
  };

  const addOptionHandler = (groupId: string): void => {
    let newOptionGroups = [];
    const chosenOptionGroup = optionGroups.find(
      (optionGroup) => optionGroup.id === groupId,
    );
    if (chosenOptionGroup) {
      const newGroup = { ...chosenOptionGroup };
      newGroup.options.push({
        id: randomId(),
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

  const deleteOptionHandler = (groupId: string, optionId: string): void => {
    const chosenOptionGroup = optionGroups.find(
      (optionGroup) => optionGroup.id === groupId,
    );
    if (chosenOptionGroup) {
      setOptionGroups(
        optionGroups.map((optionGroup) => {
          if (optionGroup.id === groupId) {
            const newOptions = optionGroup.options.filter(
              (option) => option.id !== optionId,
            );
            return { ...optionGroup, options: newOptions };
          }
          return optionGroup;
        }),
      );
    }
  };

  return (
    <>
      {optionGroups.map((optionGroup, index) => (
        <div key={`Group${optionGroup.id}`} className="mb-2">
          <OptionGroup
            groupId={optionGroup.id}
            defaultName={`Group ${index}`}
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
