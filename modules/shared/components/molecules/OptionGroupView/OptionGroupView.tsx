import React from 'react';
import type { FC, ReactElement } from 'react';
import { getVotesResults } from '../../../logic/votesLogic/votesLogic';
import type { IOptionGroupView } from './IOptionGroupView';
import TextOptionViewCovered from '../../atoms/TextOptionViewCovered/TextOptionViewCovered';
import TextOptionViewUncoverd from '../../atoms/TextOptionViewUncoverd/TextOptionViewUncoverd';

const OptionGroup: FC<IOptionGroupView.IProps> = ({
  group,
  optionCheckedId,
  onOptionClick,
}): ReactElement => {
  const zero = 0;
  const minusOne = -1;
  const { mostAndLeastVoted, optionsPercentage } = getVotesResults(
    group.options,
  );

  const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return (
    <div className="space-y-2">
      <div className="text-dark-grey text-sm">{group.name}</div>
      {group.options.map((option, index): ReactElement => {
        const letter = alphabet[index];
        const { vote_count } = option;
        return (
          <div key={option.id} data-testid="option">
            {vote_count !== minusOne ? (
              <TextOptionViewUncoverd
                id={option.id}
                optionBody={option.body}
                isOptionChecked={optionCheckedId === option.id}
                letter={letter}
                mostVoted={option.vote_count === mostAndLeastVoted[zero]}
                percentage={optionsPercentage[index]}
              />
            ) : (
              <TextOptionViewCovered
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
