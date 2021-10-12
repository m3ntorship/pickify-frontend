import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IImagePollOption } from './IImagePollOption';
import ImagePollCovered from '../../atoms/ImagePollCovered/ImagePollCovered';
import ImageCaption from '../ImageCaption/ImageCaption';
import ImagePollUncovered from '../ImagePollUncovered/ImagePollUncovered';
import ImageView from '../../atoms/ImageView/ImageView';

const ImagePollOption: FC<IImagePollOption.IProps> = ({
  media,
  imgCaption,
  imgCaptionLetter,
  optionId,
  leastVoted,
  mostVoted,
  percentage,
  isVoted,
  onOptionClick,
  isOptionChecked,
}): ReactElement => {
  return (
    <div className="relative w-auto" data-testid="image-poll-option">
      {media.length !== 0 ? (
        <>
          {media.map((image) => (
            <ImageView
              key={image.url}
              imgSrc={image.url}
              id={image.url}
              imgAlt="option"
            />
          ))}
          <div className="absolute bottom-4 right-4">
            {isVoted ? (
              <ImagePollUncovered
                id={optionId}
                type="vertical"
                leastVoted={leastVoted}
                mostVoted={mostVoted}
                percentage={percentage}
                verticalMeterHeight={268}
                isOptionChecked={isOptionChecked}
              />
            ) : (
              <ImagePollCovered
                isOneImageVote={false}
                onOptionClick={onOptionClick}
                id={optionId}
              />
            )}
          </div>
          <div className="absolute bottom-4 left-4">
            <ImageCaption
              imgCaption={imgCaption}
              imgCaptionLetter={imgCaptionLetter}
            />
          </div>
        </>
      ) : (
        <div className="flex items-center h-full justify-center">
          <p>cannot display this image :(</p>
        </div>
      )}
    </div>
  );
};

export default ImagePollOption;
