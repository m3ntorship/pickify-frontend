import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IOptionGroupWrapper } from './IOptionGroupWrapper';
import OptionGroupsHeader from './OptionGroupsHeader/OptionGroupHeader';

const OptionGroupWrapper: FC<IOptionGroupWrapper.IProps> = ({
  id,
  index,
  optionsGroupName,
  onChangeOptionsGroupNameValue,
  deleteOptionsGroupHandler,
  onClickDeleteOptionsGroupNameValueHandler,
  children,
}): ReactElement => {
  return (
    <>
      <div
        className="mb-2 bg-grey-bg p-4 rounded-md"
        data-testid="optionGroup-wrapper"
      >
        <div className="flex justify-between mb-2">
          <OptionGroupsHeader
            id={id}
            index={index}
            optionGroupName={optionsGroupName}
            onChangeOptionsGroupNameValue={onChangeOptionsGroupNameValue}
            deleteOptionsGroupHandler={deleteOptionsGroupHandler}
            onClickDeleteOptionsGroupNameValueHandler={
              onClickDeleteOptionsGroupNameValueHandler
            }
          />
        </div>
        {children}
      </div>
    </>
  );
};

export default OptionGroupWrapper;
