import React from 'react';
import type { FC, ReactElement, MouseEvent } from 'react';
import classNames from 'classnames';
import type { IImagePollGroup } from './IImagePollGroup';
import ImagePollOption from '../ImagePollOption/ImagePollOption';
import styles from './ImagePollGroup.module.css';
import SignleImagePollOption from '../SignleImagePollOption/SignleImagePollOption';
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
        <SignleImagePollOption
          groupName={group.name}
          imageUrl={group.media[firstIndex].url}
          options={group.options}
          onOptionClick={onOptionClick}
        />
      ) : (
        group.options.map((option, index) => {
          const letter = alphabet[index];
          return (
            <ImagePollOption
              imageUrl={option.media[firstIndex].url}
              imgCaption={option.body}
              imgCaptionLetter={letter}
              optionId={option.id}
              leastVoted={option.vote_count === mostAndLeastVoted[singleOption]}
              mostVoted={option.vote_count === mostAndLeastVoted[firstIndex]}
              percentage={optionsPercentage[index]}
              isVoted={option.vote_count !== undefined}
              onOptionClick={onOptionClick}
            />
          );
        })
      )}
    </div>
  );
};

export default ImagePollGroup;
