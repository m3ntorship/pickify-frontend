import React from 'react';
import type { FC, ReactElement } from 'react';
import styles from './ImagePollUncovered.module.css';
import Slider from '../../atoms/Slider/Slider';
import type { IImagePollUncovered } from './types/IImagePollUncovered';

const ImagePollUncovered: FC<IImagePollUncovered.IProps> = ({
  type,
  percentage,
  mostVoted,
  leastVoted,
  optionBody,
  verticalMeterHeight,
  id,
}): ReactElement => {
  let verticalMeterColor: 'error' | 'primary-shd5' | 'primary' | undefined =
    'primary-shd5';

  if (mostVoted) {
    verticalMeterColor = 'primary';
  }
  if (leastVoted) {
    verticalMeterColor = 'error';
  }

  const verticalContent = mostVoted && `🌟`;
  const circularContent = optionBody === 'yes' ? `👍` : `👎`;
  const circularMeterColor = optionBody === 'yes' ? 'primary' : 'error';

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
            meterColor={circularMeterColor}
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
        meterColor={verticalMeterColor}
      />
    </div>
  );
};

export default ImagePollUncovered;
