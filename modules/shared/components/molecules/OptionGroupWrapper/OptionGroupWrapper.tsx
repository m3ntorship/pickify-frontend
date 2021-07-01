import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IOptionGroupWrapper } from './IOptionGroupWrapper';
import OptionGroupsHeader from './OptionGroupsHeader/OptionGroupHeader';

const OptionGroupWrapper: FC<IOptionGroupWrapper.IProps> = ({
  id,
  index,
  optionsGroupName,
  updateOptionsGroupNameHandler,
  deleteOptionsGroupHandler,
  children,
}): ReactElement => {
  return (
    <>
      <div className="mb-2 bg-grey-bg p-4 rounded-md ">
        <div className="flex justify-between pb-2">
          <OptionGroupsHeader
            id={id}
            index={index}
            optionGroupName={optionsGroupName}
            updateOptionsGroupNameHandler={updateOptionsGroupNameHandler}
            deleteOptionsGroupHandler={deleteOptionsGroupHandler}
          />
        </div>
        {children}
      </div>
    </>
  );
};

export default OptionGroupWrapper;
