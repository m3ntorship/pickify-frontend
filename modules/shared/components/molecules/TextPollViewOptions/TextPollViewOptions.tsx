import React from 'react';
import type { FC, ReactElement, MouseEvent } from 'react';
import TextOptionViewCovered from '../../atoms/TextOptionViewCovered/TextOptionViewCovered';
import TextOptionViewUncoverd from '../../atoms/TextOptionViewUncoverd/TextOptionViewUncoverd';
import type { ITextPollViewOptions } from './ITextPollViewOptions';
import { getVotesResults } from '../../../logic/votesLogic/votesLogic';

const OptionGroup: FC<ITextPollViewOptions.IProps> = ({
  optionsGroups,
  addOneVote,
}): ReactElement => {
  const firstGroup = 0;
  const { mostAndLeastVoted, optionsPercentage } = getVotesResults(
    optionsGroups.groups[firstGroup].options,
  );
  const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const onOptionClick = (e: MouseEvent<HTMLButtonElement>): void => {
    addOneVote(e.currentTarget.id, optionsGroups.groups[firstGroup].id);
  };

  return (
    <div className="grid-rows-1 space-y-2">
      {optionsGroups.groups[firstGroup].options.map((option, index) => {
        const letter = alphabet[index];
        const { vote_count } = option;
        return (
          <div key={option.id} data-testid="option">
            {vote_count !== undefined ? (
              <TextOptionViewUncoverd
                id={option.id}
                optionBody={option.body}
                isOptionChecked={option.voted}
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
