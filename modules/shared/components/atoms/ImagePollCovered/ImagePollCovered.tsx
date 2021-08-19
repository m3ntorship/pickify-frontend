import type { ReactElement, FC } from 'react';
import React from 'react';
import type { IImagePollCovered } from './IImagePollCovered';
import FilledHeartIcon from '../../icons/filledHeart.svg';
import FilledDislikeIcon from '../../icons/filledDislike.svg';
import FilledLikeIcon from '../../icons/filledLike.svg';
import Button from '../Button/Button';
import { buttonSizeValues, buttonVariantValues } from '../Button/types/EButton';

const ImagePollCovered: FC<IImagePollCovered.IProps> = ({
  isOneImageVote,
  like,
  dislike,
  onOptionClick,
  id,
}): ReactElement => {
  return (
    <div className="flex justify-end">
      {!isOneImageVote && (
        <div className="group">
          <Button
            size={buttonSizeValues.MEDIUM}
            variant={buttonVariantValues.LIKE}
            onlyIcon
            onClick={onOptionClick}
            id={id}
          >
            <FilledHeartIcon className="fill-primary stroke-current stroke-2 text-white group-hover:fill-white" />
          </Button>
        </div>
      )}
      {isOneImageVote && (
        <div className="flex">
          {dislike && (
            <div className="group mr-4">
              <Button
                size={buttonSizeValues.MEDIUM}
                variant={buttonVariantValues.DISLIKE}
                onlyIcon
                onClick={onOptionClick}
                id={id}
              >
                <FilledDislikeIcon className="fill-error stroke-current stroke-1 text-white group-hover:fill-white" />
              </Button>
            </div>
          )}
          {like && (
            <div className="group">
              <Button
                size={buttonSizeValues.MEDIUM}
                variant={buttonVariantValues.LIKE}
                onlyIcon
                onClick={onOptionClick}
                id={id}
              >
                <FilledLikeIcon className="fill-primary stroke-current stroke-1 text-white group-hover:fill-white" />
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImagePollCovered;
