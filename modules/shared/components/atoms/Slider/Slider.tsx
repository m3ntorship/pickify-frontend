import React from 'react';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import type { ISlider } from './ISlider';
import styles from './Slider.module.css';

const imageHeight = 100;

const Slider: FC<ISlider.IProps> = ({
  progress,
  type = 'horizontal',
  verticalMeterHeight = imageHeight,
  meterColor = 'primary',
  radius,
}): ReactElement => {
  const maximumProgress = 100;
  const height = (progress * verticalMeterHeight) / maximumProgress;
  const innerHorizontalClasses = classNames([styles['inner-horizontal']], {
    [styles.success]: progress === maximumProgress,
    [styles.primary]: progress < maximumProgress,
  });
  const innerVerticalClasses = classNames([styles['inner-vertical']], {
    [styles.primary]: meterColor === 'primary',
    [styles['primary-shd5']]: meterColor === 'primary-shd5',
    [styles.error]: meterColor === 'error',
  });
  const circularClasses = classNames([styles.circular], {
    [styles['primary-text']]: meterColor === 'primary',
    [styles['error-text']]: meterColor === 'error',
  });
  const circular = {
    radius: 0,
    diameter: 0,
    stroke: 7,
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
      <div className={`${styles['outer-horizontal']} ${styles.wrapper}`}>
        <div
          className={innerHorizontalClasses}
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  }
  if (type === 'vertical') {
    return (
      <div className="flex h-full">
        <div
          className={`${styles['outer-vertical']} ${styles.wrapper}`}
          style={{ height: `${height}px` }}
        >
          <div className={innerVerticalClasses} />
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
