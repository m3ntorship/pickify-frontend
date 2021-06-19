import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IOptionGroupWrapper } from './IOptionGroupWrapper';
import OptionGroupsHeader from './OptionGroupsHeader/OptionGroupHeader';

const OptionGroupWrapper: FC<IOptionGroupWrapper.IProps> = ({
  optionGroup,
  index,
  register,
  deleteOptionGroup,
  miniSurveyState,
  setMiniSurveyState,
  children,
}): ReactElement => {
  return (
    <>
      <div className="mb-2 bg-grey-bg p-4 rounded-md ">
        <div className="flex justify-between pb-2">
          <OptionGroupsHeader
            groupIndex={index}
            groupId={optionGroup.id}
            deleteGroupHandler={(): void => {
              deleteOptionGroup(optionGroup.id);
            }}
            miniSurveyState={miniSurveyState}
            setMiniSurveyState={setMiniSurveyState}
            register={register}
          />
        </div>
        {children}
      </div>
    </>
  );
};

export default OptionGroupWrapper;
