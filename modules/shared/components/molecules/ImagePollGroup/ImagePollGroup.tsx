import React from 'react';
import type { FC, ReactElement, MouseEvent } from 'react';
import classNames from 'classnames';
import type { IImagePollGroup } from './IImagePollGroup';
import ImagePollOption from '../ImagePollOption/ImagePollOption';
import styles from './ImagePollGroup.module.css';
import SingleImagePollOption from '../SingleImagePollOption/SingleImagePollOption';
import { getVotesResults } from '../../../logic/votesLogic/votesLogic';

const ImagePollGroup: FC<IImagePollGroup.IProps> = ({
  group,
  addOneVote,
}): ReactElement => {
  const { mostAndLeastVoted, optionsPercentage } = getVotesResults(
    group.options,
  );
  const firstIndex = 0;
  const singleOption = 1;
  const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const onOptionClick = (e: MouseEvent<HTMLButtonElement>): void => {
    addOneVote(e.currentTarget.id, group.id);
  };

  const optionClasses = classNames(styles['image-poll-view'], {
    'grid-cols-1': group.media.length !== firstIndex,
    'md:grid-cols-2 grid-cols-1': group.media.length === firstIndex,
  });

  return (
    <div className={optionClasses}>
      {group.media.length !== firstIndex ? (
        <SingleImagePollOption
          groupName={group.name}
          media={group.media}
          options={group.options}
          onOptionClick={onOptionClick}
        />
      ) : (
        group.options.map((option, index) => {
          const letter = alphabet[index];
          return (
            <ImagePollOption
              key={option.id}
              media={option.media}
              imgCaption={option.body}
              imgCaptionLetter={letter}
              optionId={option.id}
              leastVoted={option.vote_count === mostAndLeastVoted[singleOption]}
              mostVoted={option.vote_count === mostAndLeastVoted[firstIndex]}
              percentage={optionsPercentage[index]}
              isVoted={option.vote_count !== undefined}
              onOptionClick={onOptionClick}
              isOptionChecked={option.voted}
            />
          );
        })
      )}
    </div>
  );
};

export default ImagePollGroup;
