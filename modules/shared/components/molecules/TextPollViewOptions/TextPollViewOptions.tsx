import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import type { ITextPollViewOptions } from './ITextPollViewOptions';
import TextPoll from '../../atoms/textPoll/index';

const OptionGroup: FC<ITextPollViewOptions.IProps> = ({
  optionsGroups,
}): ReactElement => {
  const [isOptionChecked, setIsOptionChecked] = useState(false);
  const [optionCheckedId, setOptionCheckedId] = useState('');
  const fullPrecentage = 100;
  const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const firstGroupOfTheArray = 0;
  const onOptionClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setIsOptionChecked(true);
    setOptionCheckedId(e.currentTarget.id);
  };
  return (
    <div className="grid-rows-1 space-y-2">
      {optionsGroups.groups[firstGroupOfTheArray].options.map(
        (option: ITextPollViewOptions.IOption, index: number): ReactElement => {
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
        },
      )}
    </div>
  );
};
export default OptionGroup;
