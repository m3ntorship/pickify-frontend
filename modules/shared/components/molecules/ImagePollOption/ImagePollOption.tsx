import React from 'react';
import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import type { IImagePollOption } from './IImagePollOption';
import ImagePollCovered from '../../atoms/ImagePollCovered/ImagePollCovered';
import ImageCaption from '../ImageCaption/ImageCaption';
import ImagePollUncovored from '../ImagePollUncovored/ImagePollUncovored';

const ImagePollOption: FC<IImagePollOption.IProps> = ({
  imageUrl,
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
      <Image
        src={imageUrl}
        layout="responsive"
        className="rounded-md object-cover"
        width={300}
        height={300}
      />
      <div className="absolute bottom-4 right-4">
        {isVoted ? (
          <ImagePollUncovored
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
    </div>
  );
};

export default ImagePollOption;
