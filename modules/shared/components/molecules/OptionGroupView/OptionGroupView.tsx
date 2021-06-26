import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import { getVotesResults } from '../../../logic/votesLogic/votesLogic';
import type { IOptionGroupView } from './IOptionGroupView';
import OptionViewCovered from '../../atoms/OptionViewCovered/OptionViewCovered';
import OptionViewUncoverd from '../../atoms/OptionViewUncoverd/OptionViewUncoverd';

const OptionGroup: FC<IOptionGroupView.IProps> = ({ group }): ReactElement => {
  const zero = 0;
  const [isOptionChecked, setIsOptionChecked] = useState(false);
  const [optionCheckedId, setOptionCheckedId] = useState('');
  const { mostAndLeastVoted, optionsPercentage } = getVotesResults(
    group.options,
  );

  const onOptionClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setIsOptionChecked(true);
    setOptionCheckedId(e.currentTarget.id);
  };

  const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return (
    <div className="space-y-2">
      <div className="text-dark-grey text-sm">{group.name}</div>
      {group.options.map((option, index): ReactElement => {
        const letter = alphabet[index];
        return (
          <div key={option.id} data-testid="option">
            {isOptionChecked ? (
              <OptionViewUncoverd
                id={option.id}
                optionBody={option.body}
                isOptionChecked={optionCheckedId === option.id}
                letter={letter}
                mostVoted={option.vote_count === mostAndLeastVoted[zero]}
                percentage={optionsPercentage[index]}
              />
            ) : (
              <OptionViewCovered
                id={option.id}
                onOptionClick={onOptionClick}
                optionBody={option.body}
                letter={letter}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default OptionGroup;
