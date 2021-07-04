import React from 'react';
import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import type { IImagePollOption } from './IImagePollOption';
import VoteIcon from '../../atoms/ImagePollCovered/ImagePollCovered';
import ImageCaption from '../ImageCaption/ImageCaption';

const ImagePollOption: FC<IImagePollOption.IProps> = ({
  isOneImageVote,
  imageUrl,
  imgCaption,
  imgCaptionLetter,
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
        <VoteIcon isOneImageVote={isOneImageVote} />
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
