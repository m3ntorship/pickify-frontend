import React, { useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';
import ThreeDotsIcon from '../../../icons/verticalThreeDots.svg';
import XIcon from '../../../icons/xicon.svg';
import CheckSmall from '../../../icons/checkMarkSmall.svg';
import type { IOptionGroupHeader } from './IOptionGroupHeader';

const OptionGroupsHeader: FC<IOptionGroupHeader.IProps> = ({
  id,
  index,
  optionGroupName,
  updateOptionsGroupNameHandler,
  deleteOptionsGroupHandler,
}): ReactElement => {
  const [groupName, setGroupName] = useState<string>(
    optionGroupName || `Group ${index}`,
  );
  const [isGroupNameAdded, setIsGroupNameAdded] = useState<boolean>(false);
  const optionsGroupNameEditedHandler = (): void => {
    setIsGroupNameAdded(true);
    updateOptionsGroupNameHandler(id, groupName);
  };
  useEffect(() => {
    optionsGroupNameEditedHandler();
  }, []);
  return (
    <>
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
            {index > 1 && (
              <button
                data-testid="removeGroupButton"
                type="button"
                className="h-4 w-4 bg-error-shd7 rounded-full flex justify-center items-center mr-xs"
                onClick={(): void => {
                  deleteOptionsGroupHandler(id);
                }}
              >
                <XIcon className="fill-error" />
              </button>
            )}
            <button
              data-testid="checkEditGroupButton"
              type="button"
              className="h-4 w-4 bg-success-shd7 rounded-full flex justify-center items-center"
              onClick={optionsGroupNameEditedHandler}
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
          <button
            data-testid="editGroupButton"
            type="button"
            onClick={(): void => {
              setIsGroupNameAdded(false);
            }}
            className="cursor-pointer"
          >
            <ThreeDotsIcon className="cursor-pointer fill-grey w-4 h-4" />
          </button>
        </>
      )}
    </>
  );
};
export default OptionGroupsHeader;
