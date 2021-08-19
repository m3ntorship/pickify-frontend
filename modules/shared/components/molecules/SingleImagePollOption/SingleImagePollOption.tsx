import React from 'react';
import type { FC, ReactElement } from 'react';
import { getVotesResults } from '../../../logic/votesLogic/votesLogic';
import type { ISingleImagePollOption } from './ISingleImagePollOption';
import ImagePollCovered from '../../atoms/ImagePollCovered/ImagePollCovered';
import ImageCaption from '../ImageCaption/ImageCaption';
import ImagePollUncovered from '../ImagePollUncovered/ImagePollUncovered';
import ImageView from '../../atoms/ImageView/ImageView';

const SingleImagePollOption: FC<ISingleImagePollOption.IProps> = ({
  groupName,
  media,
  options,
  onOptionClick,
}): ReactElement => {
  const { optionsPercentage } = getVotesResults(options);

  return (
    <div className="relative w-auto" data-testid="image-poll-option">
      {media.length !== 0 ? (
        <>
          {media.map((image) => (
            <ImageView
              key={image.url}
              imgSrc={image.url}
              id={image.url}
              imgAlt="group"
            />
          ))}
          <div className="absolute flex bottom-4 right-4">
            {options.map((option, index) => (
              <div className="mr-4 last:mr-0" key={option.id}>
                {option.vote_count !== undefined ? (
                  <ImagePollUncovered
                    id={option.id}
                    percentage={optionsPercentage[index]}
                    optionBody={option.body}
                    type="circular"
                    isOptionChecked={option.voted}
                  />
                ) : (
                  <ImagePollCovered
                    isOneImageVote
                    like={option.body === 'yes'}
                    dislike={option.body === 'no'}
                    onOptionClick={onOptionClick}
                    id={option.id}
                  />
                )}
              </div>
            ))}
          </div>
          {groupName && (
            <div className="absolute bottom-4 left-4">
              <ImageCaption imgCaption={groupName} />
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center">
          <p>cannot display this image :(</p>
        </div>
      )}
    </div>
  );
};

export default SingleImagePollOption;
