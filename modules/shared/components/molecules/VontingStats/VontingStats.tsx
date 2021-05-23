import React from 'react';
import type { FC, ReactElement } from 'react';
// import classNames from 'classnames';
import Slider from '../../atoms/Slider';
import type { IVotingStats } from './types/IVontingStats';

const findMinMaxVotes = (votes: number[]): number[] => {
  const maxNum: number = Math.max(...votes);
  const minNum: number = Math.min(...votes);
  return [maxNum, minNum];
};

const VotingStats: FC<IVotingStats.IProps> = ({
  optionVotes,
  votes,
  totalVotes,
  type,
}): ReactElement => {
  const totalProfress = 100;
  const progress: number = (votes / totalVotes) * totalProfress;
  // const height = progress * 3;
  // const radius = (progress * 6) / 10;
  const minMaxVotes: number[] = findMinMaxVotes(optionVotes);
  const firstIndex = 0;
  const secondIndex = 1;

  let verticalMeterColor: 'error' | 'primary-shd5' | 'primary' | undefined =
    'primary-shd5';

  if (votes === minMaxVotes[firstIndex]) {
    verticalMeterColor = 'primary';
  }
  if (votes === minMaxVotes[secondIndex]) {
    verticalMeterColor = 'error';
  }

  const verticalContent = votes === minMaxVotes[firstIndex] ? `🌟` : '';
  const circularContent = votes === minMaxVotes[firstIndex] ? `👍` : `👎`;
  if (type === 'circular') {
    return (
      <>
        <div className="flex justify-center items-center w-max py-xxsvl px-m bg-white rounded-full">
          <p>
            {circularContent}
            <span className="block">{Math.round(progress)}%</span>
          </p>
        </div>
        <Slider
          type={type}
          radius={41}
          progress={progress}
          verticalMeterColor={verticalMeterColor}
        />
      </>
    );
  }
  return (
    <div className="flex items-start">
      <div className="bg-white py-xxs px-xsvv rounded-l-md">
        <p className="font-medium text-base text-dark">
          {verticalContent} <span>{Math.round(progress)}%</span>
        </p>
      </div>
      <Slider
        type={type}
        progress={progress}
        verticalMeterColor={verticalMeterColor}
      />
    </div>
  );
};

export default VotingStats;
