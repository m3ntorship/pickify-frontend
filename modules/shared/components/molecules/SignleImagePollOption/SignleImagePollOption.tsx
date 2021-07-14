import React from 'react';
import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import { getVotesResults } from '../../../logic/votesLogic/votesLogic';
import type { ISignleImagePollOption } from './ISignleImagePollOption';
import ImagePollCovered from '../../atoms/ImagePollCovered/ImagePollCovered';
import ImageCaption from '../ImageCaption/ImageCaption';
import ImagePollUncovered from '../ImagePollUncovered/ImagePollUncovered';

const SignleImagePollOption: FC<ISignleImagePollOption.IProps> = ({
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
          <div className="absolute flex bottom-4 right-4">
            {options.map((option, index) => (
              <div className="mr-4 last:mr-0" key={option.id}>
                {option.vote_count !== undefined ? (
                  <ImagePollUncovered
                    id={option.id}
                    percentage={optionsPercentage[index]}
                    optionBody={option.body}
                    type="circular"
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

export default SignleImagePollOption;
