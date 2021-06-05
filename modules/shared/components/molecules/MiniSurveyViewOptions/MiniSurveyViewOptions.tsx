import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IMiniSurveyViewOptions } from './IMiniSurveyViewOptions';
import TextPoll from '../../atoms/textPoll/index';

const MiniSurveyViewOptions: FC<IMiniSurveyViewOptions.IProps> = ({
  optionsGroups,
}): ReactElement => {
  const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return (
    <div className="grid-rows-1 gap-4 grid">
      {optionsGroups.groups.map((group) => {
        return (
          <div key={group.id} className="grid-rows-1 gap-2 grid">
            <div className="text-dark-grey text-sm">{group.name}</div>
            {group.options.map(
              (
                option: IMiniSurveyViewOptions.IOption,
                index: number,
              ): ReactElement => {
                const letter = alphabet[index];
                return (
                  <div key={option.id} data-testid="option">
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
      })}
    </div>
  );
};
export default MiniSurveyViewOptions;
