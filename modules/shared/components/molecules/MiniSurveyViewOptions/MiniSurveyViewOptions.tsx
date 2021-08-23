import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import * as EButton from '../../atoms/Button/types/EButton';
import type { IMiniSurveyViewOptions } from './IMiniSurveyViewOptions';
import OptionGroupView from '../OptionGroupView/OptionGroupView';
import Button from '../../atoms/Button/Button';
import ArrowDownIcon from '../../icons/buttonArowDown.svg';

const MiniSurveyViewOptions: FC<IMiniSurveyViewOptions.IProps> = ({
  optionsGroups,
  addOneVote,
  showExpandButton,
  type,
}): ReactElement => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleIsExpanded = (): void => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="space-y-4">
      {optionsGroups.groups.map((group) => {
        return (
          <OptionGroupView
            type={type}
            key={group.id}
            group={group}
            addOneVote={addOneVote}
            isExpanded={isExpanded}
          />
        );
      })}
      {showExpandButton ? (
        <Button
          buttonText={
            isExpanded ? 'Switch to summary view' : 'Switch to votes view'
          }
          variant={EButton.buttonVariantValues.TEXT}
          leftIcon
          size={EButton.buttonSizeValues.SMALL}
          onClick={toggleIsExpanded}
        >
          <ArrowDownIcon />
        </Button>
      ) : (
        ''
      )}
    </div>
  );
};
export default MiniSurveyViewOptions;
