import React from 'react';
import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import type { IImagePollOption } from './IImagePollOption';
import ImagePollCovered from '../../atoms/ImagePollCovered/ImagePollCovered';
import ImageCaption from '../ImageCaption/ImageCaption';
import ImagePollUncovered from '../ImagePollUncovered/ImagePollUncovered';

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
            <div key={image.url} className="relative">
              <div className="absolute w-full h-full rounded-md overflow-hidden">
                <Image
                  src={image.url}
                  layout="responsive"
                  className="filter blur-sm"
                  objectFit="cover"
                  width={600}
                  height={600}
                />
              </div>
              <Image
                src={image.url}
                layout="responsive"
                className="rounded-md"
                objectFit="contain"
                width={600}
                height={600}
              />
            </div>
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
        <div className="flex items-center h-full justify-center">
          <p>cannot display this image :(</p>
        </div>
      )}
    </div>
  );
};

export default ImagePollOption;
