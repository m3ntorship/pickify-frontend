import React from 'react';
import type { FC, ReactElement } from 'react';
import type { ITextPollViewOptions } from './ITextPollViewOptions';
import TextPoll from '../../atoms/textPoll/index';

const OptionGroup: FC<ITextPollViewOptions.IProps> = ({
  optionsGroups,
}): ReactElement => {
  const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const firstGroupOfTheArray = 0;
  return (
    <div className="mb-m">
      {optionsGroups.groups[firstGroupOfTheArray].options.map(
        (option: ITextPollViewOptions.IOption, index: number): ReactElement => {
          const letter = alphabet[index];
          return (
            <div
              className=" my-1 first:mt-4"
              key={option.id}
              data-testid="option"
            >
              <TextPoll
                option={option.body}
                id={option.id}
                onOptionClick={(): void => undefined}
                showResult={false}
                letter={letter}
              />
            </div>
          );
        },
      )}
    </div>
  );
};
export default OptionGroup;
