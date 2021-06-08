import React from 'react';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import type { ISlider } from './ISlider';
import styles from './Slider.module.css';

const Slider: FC<ISlider.IProps> = ({
  progress,
  type = 'horizontal',
  verticalMeterHeight,
  verticalMeterColor = 'primary',
  radius,
}): ReactElement => {
  const maximumProgress = 100;
  const halfMaximumProgress = 50;
  const innerHorizontalClasses = classNames([styles['inner-horizontal']], {
    [styles.success]: progress === maximumProgress,
    [styles.primary]: progress < maximumProgress,
  });
  const outerVerticalClasses = classNames([styles['outer-vertical']], {
    [styles.success]: progress === maximumProgress,
    [styles.primary]:
      progress < maximumProgress && verticalMeterColor === 'primary',
    [styles['primary-shd5']]:
      progress < maximumProgress && verticalMeterColor === 'primary-shd5',
    [styles.error]:
      progress < maximumProgress && verticalMeterColor === 'error',
  });
  const innerVerticalClasses = classNames([styles['inner-vertical']]);
  const wrapperClasses = classNames([styles.wrapper]);
  const circularClasses = classNames([styles.circular], {
    [styles['primary-text']]: progress > halfMaximumProgress,
    [styles['error-text']]: progress <= halfMaximumProgress,
  });
  const circular = {
    radius: 0,
    diameter: 0,
    stroke: 4,
    normalizedRadius: 0,
    normalizedDiameter: 0,
    circumference: 0,
    doubleStroke: 0,
  };
  const defaultRadius = 60;
  circular.radius = radius ?? defaultRadius;
  circular.diameter = circular.radius + circular.radius;
  circular.doubleStroke = circular.stroke + circular.stroke;
  circular.normalizedRadius = circular.radius - circular.doubleStroke;
  circular.normalizedDiameter =
    circular.normalizedRadius + circular.normalizedRadius;
  circular.circumference = circular.normalizedDiameter * Math.PI;
  if (type === 'horizontal') {
    return (
      <div className={styles['outer-horizontal']}>
        <div
          className={innerHorizontalClasses}
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  }
  if (type === 'vertical') {
    return (
      <div
        className={wrapperClasses}
        style={{
          height: `${
            verticalMeterHeight ? `${verticalMeterHeight}px` : '100%'
          }`,
        }}
      >
        <div
          style={{
            height: `${
              verticalMeterHeight ? `${verticalMeterHeight}px` : '100%'
            }`,
          }}
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
        r={circular.normalizedRadius}
        cx={circular.radius}
        cy={circular.radius}
      />
    </svg>
  );
};

export default Slider;
