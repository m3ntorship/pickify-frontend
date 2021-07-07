import React from 'react';
import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import type { IImagePollOption } from './IImagePollOption';
import ImagePollCovered from '../../atoms/ImagePollCovered/ImagePollCovered';
import ImageCaption from '../ImageCaption/ImageCaption';
import ImagePollUncovered from '../ImagePollUncovered/ImagePollUncovered';
import { apiUrls } from '../../../configuration/ConfigPostCreation/config';

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
}): ReactElement => {
  return (
    <div className="relative w-auto" data-testid="image-poll-option">
      {media.length !== 0 ? (
        <>
          {media.map((image) => (
            <Image
              key={image.url}
              src={`${apiUrls.mediaAPI}${image.url}`}
              layout="responsive"
              className="rounded-md object-cover"
              width={300}
              height={300}
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
                verticalMeterHeight={150}
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
        <p>cannot display this image :(</p>
      )}
    </div>
  );
};

export default ImagePollOption;
