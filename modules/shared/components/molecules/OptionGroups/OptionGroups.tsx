import React from 'react';
import type { FC, ReactElement } from 'react';
import { configPostCreation } from '../../../configuration/ConfigPostCreation/config';
import PlusIcon from '../../icons/plus.svg';
import OptionGroup from '../OptionGroup/OptionGroup';
import type { IOptionGroups } from './IOptionGroups';
import OptionGroupWrapper from '../OptionGroupWrapper/OptionGroupWrapper';

const OptionGroups: FC<IOptionGroups.IProps> = ({
  groups,
  addOptionsGroupHandler,
  deleteOptionsGroupHandler,
  onChangeOptionsGroupNameValue,
  onClickDeleteOptionsGroupNameValueHandler,
  onChangeOptionValueHandler,
  onClickDeleteOptionValueHandler,
  onBlurOptionHandler,
  addOptionHandler,
  deleteOptionHandler,
}): ReactElement => {
  const { maxOptionGroup } = configPostCreation;
  return (
    <>
      {groups.map((optionGroup, index) => {
        return (
          <OptionGroupWrapper
            key={optionGroup.id}
            id={optionGroup.id}
            index={index + 1}
            optionsGroupName={optionGroup.name}
            onChangeOptionsGroupNameValue={onChangeOptionsGroupNameValue}
            deleteOptionsGroupHandler={deleteOptionsGroupHandler}
            onClickDeleteOptionsGroupNameValueHandler={
              onClickDeleteOptionsGroupNameValueHandler
            }
          >
            <OptionGroup
              id={optionGroup.id}
              index={index}
              options={optionGroup.options}
              onChangeOptionValueHandler={(optionId, groupId, e): void => {
                onChangeOptionValueHandler(optionId, groupId, e);
              }}
              onClickDeleteOptionValueHandler={(optionId, groupId): void => {
                onClickDeleteOptionValueHandler(optionId, groupId);
              }}
              onBlurOptionHandler={(optionId, groupId, e): void => {
                onBlurOptionHandler(optionId, groupId, e);
              }}
              addOptionHandler={(groupId): void => {
                addOptionHandler(groupId);
              }}
              deleteOptionHandler={(optionId, groupId): void => {
                deleteOptionHandler(optionId, groupId);
              }}
            />
          </OptionGroupWrapper>
        );
      })}
      {groups.length < maxOptionGroup && (
        <div className="flex flex-col bg-grey-bg p-4 rounded-md ">
          <button
            type="button"
            data-testid="addOptionGroupBtn"
            className="text-dark-grey cursor-pointer flex items-center self-start "
            onClick={addOptionsGroupHandler}
          >
            <PlusIcon className="fill-dark-grey mr-1 my-3xxs" />
            <span className="text-sm font-medium">Add Option Group</span>
          </button>
        </div>
      )}
    </>
  );
};

export default OptionGroups;
