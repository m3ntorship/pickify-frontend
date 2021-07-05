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
  imageUrl,
  options,
  onOptionClick,
}): ReactElement => {
  const { mostAndLeastVoted, optionsPercentage } = getVotesResults(options);
  const firstVote = 0;
  const secondVote = 1;

  return (
    <div className="relative w-auto" data-testid="image-poll-option">
      <Image
        src={imageUrl}
        layout="responsive"
        className="rounded-md object-cover"
        width={300}
        height={300}
      />
      <div className="absolute flex bottom-4 right-4">
        {options.map((option, index) => (
          <div className="mr-4 last:mr-0" key={option.id}>
            {option.vote_count !== undefined ? (
              <ImagePollUncovered
                id={option.id}
                percentage={optionsPercentage[index]}
                mostVoted={option.vote_count === mostAndLeastVoted[firstVote]}
                leastVoted={option.vote_count === mostAndLeastVoted[secondVote]}
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
      <div className="absolute bottom-4 left-4">
        <ImageCaption imgCaption={groupName} />
      </div>
    </div>
  );
};

export default SignleImagePollOption;
