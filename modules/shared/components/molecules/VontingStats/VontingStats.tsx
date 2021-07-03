import React from 'react';
import type { FC, ReactElement } from 'react';
import styles from './VotingStats.module.css';
import Slider from '../../atoms/Slider/Slider';
import type { IVotingStats } from './types/IVontingStats';

const imageHeight = 100;

const VotingStats: FC<IVotingStats.IProps> = ({
  type,
  percentage,
  mostVoted,
  leastVoted,
  verticalMeterHeight = imageHeight,
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
      <div className={styles['circular-vote-meter-wrapper']} id={id}>
        <div className={styles['circular-content']}>
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
    <div className={styles['vertical-vote-meter-wrapper']} id={id}>
      <div className={styles['percentage-wrapper']}>
        <p className={styles.percentage}>
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
