import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IOptionGroup } from './IOptionGroupl';
import TextPoll from '../../atoms/textPoll/index';
import styles from './OptionGroup.module.css';

const OptionGroup: FC<IOptionGroup.IProps> = ({
  optionsGroups,
  caption,
}): ReactElement => {
  const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return (
    <div className={styles['options-wrapper']}>
      <div>
        <h3 className={styles['post-caption']}>{caption}</h3>
      </div>
      <div>
        {optionsGroups.groups.map((group) =>
          group.options.map((option, index) => {
            const letter = alphabet[index];
            return (
              <div
                className={styles['container-for-text-poll']}
                key={option.id}
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
          }),
        )}
      </div>
    </div>
  );
};
export default OptionGroup;
