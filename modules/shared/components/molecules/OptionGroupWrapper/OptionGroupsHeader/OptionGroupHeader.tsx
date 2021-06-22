import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import ThreeDotsIcon from '../../../icons/verticalThreeDots.svg';
import XIcon from '../../../icons/xicon.svg';
import CheckSmall from '../../../icons/checkMarkSmall.svg';
import type { IOptionGroupHeader } from './IOptionGroupHeader';

const OptionGroupsHeader: FC<IOptionGroupHeader.IProps> = ({
  groupIndex,
  groupId,
  deleteGroupHandler,
  miniSurveyState,
  setMiniSurveyState,
  register,
}): ReactElement => {
  const zero = 0;
  const [groupName, setGroupName] = useState<string>('');
  const [isGroupNameAdded, setIsGroupNameAdded] = useState<boolean>(false);
  const groupNameRegister = register && {
    ...register(`${groupId}`),
  };
  return (
    <>
      {!isGroupNameAdded ? (
        <>
          <input
            type="text"
            placeholder="Group name"
            className="focus:outline-none pr-1 bg-accent-shd7 text-sm text-dark max-w-12xl w-full"
            value={groupName}
            {...groupNameRegister}
            onChange={(e): void => {
              groupNameRegister?.onChange(e);
              setGroupName(e.target.value);
            }}
          />
          <div className="flex">
            {groupIndex !== zero && (
              <button
                type="button"
                data-testid="removeGroup-button"
                className="h-4 w-4 bg-error-shd7 focus:outline-none rounded-full flex justify-center items-center mr-xs"
                onClick={deleteGroupHandler}
              >
                <XIcon className="fill-error" />
              </button>
            )}
            <button
              type="button"
              data-testid="addGroupName-button"
              className="h-4 w-4 bg-success-shd7 focus:outline-none rounded-full flex justify-center items-center"
              onClick={(): void => {
                setIsGroupNameAdded(true);
                setMiniSurveyState({
                  ...miniSurveyState,
                  groups: miniSurveyState.groups.map((group) => {
                    if (group.id === groupId) {
                      return { ...group, groupName };
                    }
                    return group;
                  }),
                });
              }}
            >
              <CheckSmall className="fill-success" />
            </button>
          </div>
        </>
      ) : (
        <>
          <span
            className="text-dark-grey font-normal text-sm"
            data-testid="inputName-text"
          >
            {groupName}
          </span>
          <ThreeDotsIcon
            className="cursor-pointer fill-grey w-4 h-4"
            onClick={(): void => {
              setIsGroupNameAdded(false);
            }}
            data-testid="three-dots"
          />
        </>
      )}
    </>
  );
};
export default OptionGroupsHeader;
