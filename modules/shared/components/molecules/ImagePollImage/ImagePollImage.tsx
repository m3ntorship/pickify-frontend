import React from 'react';
import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import type { IImagePollImage } from './IImagePollImage';
import VoteIcon from '../../atoms/VoteIcon/VoteIcon';

const ImagePollImage: FC<IImagePollImage.IProps> = ({
  isOneImageVote,
  imageUrl,
}): ReactElement => {
  return (
    <div className="relative w-auto">
      <Image
        src={imageUrl}
        layout="fill"
        objectFit="contain"
        className="w-full h-full"
      />
      <div className="absolute bottom-4 right-4">
        <VoteIcon isOneImageVote={isOneImageVote} />
      </div>
      <div className="absolute bottom-4 left-4">
        <p>image caption</p>
      </div>
    </div>
  );
};

export default ImagePollImage;
