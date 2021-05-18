import type { FC, ReactElement } from 'react';
import React from 'react';
import classNames from 'classnames';
import type { ISlider } from './ISlider';

const Slider: FC<ISlider.IProps> = ({
  progress,
  type,
  height,
  verticalMeterColor,
  radius,
}): ReactElement => {
  const maximumProgress = 100;
  const halfMaximumProgress = 50;
  const defaultHeight = 300;
  const outerHorizontalClasses = classNames(
    'w-full h-3 bg-white flex items-center p-1 rounded-sm',
  );
  const innerHorizontalClasses = classNames('h-1 rounded-sm', {
    'bg-success': progress === maximumProgress,
    'bg-primary': progress < maximumProgress,
  });
  const outerVerticalClasses = classNames('w-2 rounded-sm', {
    'bg-success': progress === maximumProgress,
    'bg-primary':
      progress < maximumProgress && verticalMeterColor === 'primary',
    'bg-primary-shd5':
      progress < maximumProgress && verticalMeterColor === 'primary-shd5',
    'bg-error': progress < maximumProgress && verticalMeterColor === 'error',
  });
  const innerVerticalClasses = classNames('w-2 bg-white rounded-t-sm');
  const wrapperClasses = classNames(
    'rounded-sm py-1 px-2 bg-white w-3 flex justify-center',
  );
  const circularClasses = classNames(
    '-rotate-90 origin-center stroke-current',
    {
      'text-primary': progress > halfMaximumProgress,
      'text-error': progress < halfMaximumProgress,
    },
  );
  const circular = {
    radius: 0,
    diameter: 0,
    stroke: 4,
    normalizedRadius: 0,
    circumference: 0,
    doubleStroke: 0,
  };
  const defaultRadius = 60;
  circular.radius = radius ?? defaultRadius;
  circular.diameter = circular.radius + circular.radius;
  circular.doubleStroke = circular.stroke + circular.stroke;
  circular.normalizedRadius = circular.radius - circular.doubleStroke;
  circular.circumference = circular.diameter * Math.PI;
  if (type === 'horizontal') {
    return (
      <div className={outerHorizontalClasses}>
        <div
          className={innerHorizontalClasses}
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  }
  if (type === 'vertical') {
    return (
      <div className={wrapperClasses}>
        <div
          style={{ height: `${height ?? defaultHeight}px` }}
          className={outerVerticalClasses}
        >
          <div
            className={innerVerticalClasses}
            style={{ height: `${maximumProgress - progress}%` }}
          />
        </div>
      </div>
    );
  }
  return (
    <svg width={circular.diameter} height={circular.diameter}>
      <circle
        className={circularClasses}
        strokeWidth={circular.stroke}
        strokeDasharray={`${circular.circumference} ${circular.circumference}`}
        style={{
          strokeDashoffset: `${
            circular.circumference -
            (progress / maximumProgress) * circular.circumference
          }`,
        }}
        fill="transparent"
        r={circular.radius - circular.doubleStroke}
        cx={circular.radius}
        cy={circular.radius}
      />
    </svg>
  );
};

export default Slider;
