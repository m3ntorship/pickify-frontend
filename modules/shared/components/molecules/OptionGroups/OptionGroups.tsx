import React from 'react';
import type { FC, ReactElement } from 'react';
import PlusIcon from '../../icons/plus.svg';
import OptionGroup from '../OptionGroup/OptionGroup';
import OptionGroupsHeader from './OptionGroupsHeader/OptionGroupHeader';
import type { IOptionGroups } from './IOptionGroups';

const OptionGroups: FC<IOptionGroups.IProps> = ({
  groups,
  register,
  isSubmitted,
  reset,
  errors,
  dirtyFields,
  variantMessage,
  addOptionGroup,
  deleteOptionGroup,
  setOptionsInGroup,
}): ReactElement => {
  return (
    <>
      {groups.map((optionGroup) => (
        <div key={optionGroup.id} className="mb-2 bg-grey-bg p-4 rounded-md ">
          <div className="flex justify-between pb-2">
            <OptionGroupsHeader
              deleteGroupHandler={(): void => {
                deleteOptionGroup(optionGroup.id);
              }}
            />
          </div>
          <OptionGroup
            groupId={optionGroup.id}
            options={optionGroup.options}
            variantMessage={variantMessage}
            register={register}
            formSubmitted={isSubmitted}
            reset={reset}
            errors={errors}
            dirtyFields={dirtyFields}
            setOptionsInGroup={setOptionsInGroup}
          />
        </div>
      ))}
      <div className="flex flex-col bg-grey-bg p-4 rounded-md ">
        <button
          type="button"
          className="text-dark-grey cursor-pointer flex items-center self-start focus:outline-none"
          onClick={addOptionGroup}
        >
          <PlusIcon className="fill-dark-grey mr-1 my-3xxs" />
          <span className="text-sm font-medium">Add Option Group</span>
        </button>
      </div>
    </>
  );
};

export default OptionGroups;
