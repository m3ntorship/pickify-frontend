import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import type { IMiniSurveyViewOptions } from './IMiniSurveyViewOptions';
import TextPoll from '../../atoms/textPoll/index';

const MiniSurveyViewOptions: FC<IMiniSurveyViewOptions.IProps> = ({
  optionsGroups,
}): ReactElement => {
  const [isOptionChecked, setIsOptionChecked] = useState(false);
  const [optionCheckedId, setOptionCheckedId] = useState('');
  const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const fullPrecentage = 100;

  const onOptionClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setIsOptionChecked(true);
    setOptionCheckedId(e.currentTarget.id);
  };
  return (
    <div className="space-y-4">
      {optionsGroups.groups.map((group) => {
        return (
          <div key={group.id} className="space-y-2">
            <div className="text-dark-grey text-sm">{group.name}</div>
            {group.options.map((option, index): ReactElement => {
              const letter = alphabet[index];

              return (
                <div key={option.id} data-testid="option">
                  {option.id === optionCheckedId ? (
                    <TextPoll
                      option={option.body}
                      id={option.id}
                      isChecked={isOptionChecked}
                      onOptionClick={onOptionClick}
                      showResult
                      letter={letter}
                      percentage={Math.round(Math.random() * fullPrecentage)}
                      mostVoted
                    />
                  ) : (
                    <TextPoll
                      option={option.body}
                      id={option.id}
                      onOptionClick={onOptionClick}
                      showResult={false}
                      letter={letter}
                    />
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default MiniSurveyViewOptions;
