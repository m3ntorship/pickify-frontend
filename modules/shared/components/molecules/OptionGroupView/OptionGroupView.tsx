// import { useState } from 'react';
import type { FC, ReactElement } from 'react';
// import { getVotesResults } from '@modules/shared/logic/votesLogic/votesLogic';
import type { IOptionGroupView } from './IOptionGroupView';
// import TextPoll from '../../atoms/textPoll/index';

const OptionGroup: FC<IOptionGroupView.IProps> = ({ group }): ReactElement => {
  //   const [isOptionChecked, setIsOptionChecked] = useState(false);
  //   const [optionCheckedId, setOptionCheckedId] = useState('');
  //   const { mostAndLeastVoted, optionsPercentage } = getVotesResults(
  //     group.options,
  //   );

  //   const onOptionClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
  //     setIsOptionChecked(true);
  //     setOptionCheckedId(e.currentTarget.id);
  //   };

  //   const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return (
    <div className="space-y-2">
      <div className="text-dark-grey text-sm">{group.name}</div>
      {group.options.map((option): ReactElement => {
        // const letter = alphabet[index];
        return (
          <div key={option.id} data-testid="option">
            option
          </div>
        );
      })}
    </div>
  );
};

export default OptionGroup;
