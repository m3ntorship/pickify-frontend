import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IMiniSurveyViewOptions } from './IMiniSurveyViewOptions';
import OptionGroupView from '../OptionGroupView/OptionGroupView';

const MiniSurveyViewOptions: FC<IMiniSurveyViewOptions.IProps> = ({
  optionsGroups,
  onOptionClick,
  optionCheckedId,
}): ReactElement => {
  return (
    <div className="space-y-4">
      {optionsGroups.groups.map((group) => {
        return (
          <OptionGroupView
            key={group.id}
            group={group}
            onOptionClick={onOptionClick}
            optionCheckedId={optionCheckedId}
          />
        );
      })}
    </div>
  );
};
export default MiniSurveyViewOptions;
