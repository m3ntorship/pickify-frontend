import React from 'react';
import type { FC, ReactElement } from 'react';
// import classNames from 'classnames';
import Slider from '../../atoms/Slider/Slider';
import type { IVotingStats } from './types/IVontingStats';

const VotingStats: FC<IVotingStats.IProps> = ({
  type,
  percentage,
  mostVoted,
  leastVoted,
  verticalMeterHeight,
  id,
}): ReactElement => {
  let meterColor: 'error' | 'primary-shd5' | 'primary' | undefined =
    'primary-shd5';

  if (mostVoted) {
    meterColor = 'primary';
  }
  if (leastVoted) {
    meterColor = 'error';
  }

  const verticalContent = mostVoted && `🌟`;
  const circularContent = mostVoted ? `👍` : `👎`;
  if (type === 'circular') {
    return (
      // <div className="inline-flex flex-col justify-center items-center w-3xl h-3xl bg-white rounded-full">
      //   <p className="mb-1">{circularContent}</p>
      //   <p>{percentage}%</p>
      // </div>

      <div
        className="flex items-center justify-center w-4xl h-4xl relative"
        id={id}
      >
        <div className="flex flex-col justify-center items-center w-3xl h-3xl bg-white rounded-full">
          <p className="mb-1">{circularContent}</p>
          <p>{percentage}%</p>
        </div>
        <div className="absolute ">
          <Slider
            progress={percentage}
            type="circular"
            radius={50}
            meterColor={meterColor}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-start h-full" id={id}>
      <div className="bg-white py-xxs px-xsvv rounded-l-md">
        <p className="font-medium text-base text-dark">
          {verticalContent} <span>{percentage}%</span>
        </p>
      </div>
      <Slider
        type="vertical"
        progress={percentage}
        verticalMeterHeight={verticalMeterHeight}
        meterColor={meterColor}
      />
    </div>
  );
};

export default VotingStats;
