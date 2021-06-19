import React from 'react';
import type { FC, ReactElement } from 'react';
import classNames from 'classnames';
import type { IImagePollGroup } from './IImagePollGroup';
import ImagePollOption from '../ImagePollOption/ImagePollOption';
import styles from './ImagePollGroup.module.css';

const ImagePollGroup: FC<IImagePollGroup.IProps> = ({
  group,
}): ReactElement => {
  const firstIndex = 0;
  const singleOption = 1;
  const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const optionClasses = classNames(styles['image-poll-view'], {
    'grid-cols-1': group.options.length === singleOption,
    'md:grid-cols-2 grid-cols-1': group.options.length > singleOption,
  });
  return (
    <div className={optionClasses}>
      {group.options.map((option, index) => {
        const letter = alphabet[index];
        return (
          <ImagePollOption
            key={option.id}
            imageUrl={option.media[firstIndex].url}
            isOneImageVote={group.options.length === singleOption}
            imgCaption={option.body}
            imgCaptionLetter={
              group.options.length === singleOption ? '' : letter
            }
          />
        );
      })}
    </div>
  );
};

export default ImagePollGroup;
