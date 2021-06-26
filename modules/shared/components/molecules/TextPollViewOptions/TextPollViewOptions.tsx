import type { FC, ReactElement } from 'react';
import type { ITextPollViewOptions } from './ITextPollViewOptions';
// import { getVotesResults } from '../../../logic/votesLogic/votesLogic';

const OptionGroup: FC<ITextPollViewOptions.IProps> = ({
  optionsGroups,
  // onOptionClick,
  // isOptionChecked,
}): ReactElement => {
  const firstGroup = 0;
  // const { mostAndLeastVoted, optionsPercentage } = getVotesResults(
  //   optionsGroups.groups[firstGroup].options,
  // );
  // const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return (
    <div className="grid-rows-1 space-y-2">
      {optionsGroups.groups[firstGroup].options.map(
        (option, index): ReactElement => {
          // const letter = alphabet[index];
          return (
            <div key={option.id} data-testid="option">
              {`${option.body} ${index}`}
              {/* {!isOptionChecked ? (
                <div
                  aria-hidden
                  onClick={onOptionClick}
                >{`${letter} ${option.body}`}</div>
              ) : (
                <div>{`${letter} ${option.body} ${optionsPercentage[index]}% ${
                  mostAndLeastVoted[firstGroup] === option.vote_count
                    ? 'winner'
                    : 'not winner'
                }`}</div>
              )} */}
            </div>
          );
        },
      )}
    </div>
  );
};
export default OptionGroup;
