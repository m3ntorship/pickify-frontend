import React from 'react';
import type { FC, ReactElement, MouseEvent } from 'react';
import { getVotesResults } from '../../../logic/votesLogic/votesLogic';
import type { IOptionGroupView } from './IOptionGroupView';
import TextOptionViewCovered from '../../atoms/TextOptionViewCovered/TextOptionViewCovered';
import TextOptionViewUncoverd from '../../atoms/TextOptionViewUncoverd/TextOptionViewUncoverd';

const OptionGroup: FC<IOptionGroupView.IProps> = ({
  group,
  addOneVote,
  isExpanded,
  type,
}): ReactElement => {
  const zero = 0;
  const { mostAndLeastVoted, optionsPercentage } = getVotesResults(
    group.options,
  );

  const onOptionClick = (e: MouseEvent<HTMLButtonElement>): void => {
    addOneVote(e.currentTarget.id, group.id);
  };

  const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return (
    <div className="space-y-2">
      <div className="text-dark-grey text-sm">{group.name}</div>
      {group.options.map((option, index): ReactElement => {
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
                mostVoted={
                  option.vote_count === mostAndLeastVoted[zero] &&
                  option.vote_count !== 0
                }
                percentage={optionsPercentage[index]}
                isExpanded={isExpanded}
                type={type}
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
