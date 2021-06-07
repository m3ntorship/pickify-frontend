import React from 'react';
import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import type { IImagePollImage } from './IImagePollImage';
import VoteIcon from '../../atoms/VoteIcon/VoteIcon';

const ImagePollImage: FC<IImagePollImage.IProps> = ({
  isOneImageVote = true,
}): ReactElement => {
  return (
    <div className=" bg-accent">
      <div className="relative w-auto bg-primary-dark">
        <Image
          src="https://source.unsplash.com/random"
          layout="responsive"
          width={600}
          height={644}
        />
        <div className="absolute bottom-4 right-4  ">
          <VoteIcon isOneImageVote={isOneImageVote} />
        </div>
        <div className="absolute bottom-4 left-4 bg-grey-shd1">
          <p>image caption</p>
        </div>
      </div>
    </div>
  );
};

export default ImagePollImage;
