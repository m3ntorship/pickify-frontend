import React from 'react';
import type { FC, ReactElement } from 'react';
import TextOptionViewCovered from '../../atoms/TextOptionViewCovered/TextOptionViewCovered';
import TextOptionViewUncoverd from '../../atoms/TextOptionViewUncoverd/TextOptionViewUncoverd';
import type { ITextPollViewOptions } from './ITextPollViewOptions';
import { getVotesResults } from '../../../logic/votesLogic/votesLogic';

const OptionGroup: FC<ITextPollViewOptions.IProps> = ({
  optionsGroups,
  onOptionClick,
  optionCheckedId,
}): ReactElement => {
  const firstGroup = 0;
  const minusOne = -1;
  const { mostAndLeastVoted, optionsPercentage } = getVotesResults(
    optionsGroups.groups[firstGroup].options,
  );
  const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return (
    <div className="grid-rows-1 space-y-2">
      {optionsGroups.groups[firstGroup].options.map((option, index) => {
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
                mostVoted={option.vote_count === mostAndLeastVoted[firstGroup]}
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
