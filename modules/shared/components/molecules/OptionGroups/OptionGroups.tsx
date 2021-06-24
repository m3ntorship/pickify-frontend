import React from 'react';
import type { FC, ReactElement } from 'react';
import PlusIcon from '../../icons/plus.svg';
import OptionGroup from '../OptionGroup/OptionGroup';
import type { IOptionGroups } from './IOptionGroups';
import OptionGroupWrapper from '../OptionGroupWrapper/OptionGroupWrapper';

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
  miniSurveyState,
  setMiniSurveyState,
}): ReactElement => {
  return (
    <>
      {groups.map((optionGroup, index) => (
        <OptionGroupWrapper
          key={optionGroup.id}
          optionGroup={optionGroup}
          index={index}
          register={register}
          deleteOptionGroup={deleteOptionGroup}
          miniSurveyState={miniSurveyState}
          setMiniSurveyState={setMiniSurveyState}
        >
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
            miniSurveyState={miniSurveyState}
            setMiniSurveyState={setMiniSurveyState}
          />
        </OptionGroupWrapper>
      ))}
      <div className="flex flex-col bg-grey-bg p-4 rounded-md ">
        <button
          type="button"
          data-testid="addOptionGroupBtn"
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
