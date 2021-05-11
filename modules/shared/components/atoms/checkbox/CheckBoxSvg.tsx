import React from 'react';
import type { FC, ReactElement } from 'react';
import type { ICheckbox } from './ICheckbox';

const CheckboxSVG: FC<ICheckbox.ICheckBoxSvgProps> = ({
  className,
  width,
  height,
}): ReactElement => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.66632 6.39073L1.47099 4.19539L0.52832 5.13806L3.66632 8.27606L10.1377 1.80473L9.19499 0.862061L3.66632 6.39073Z"
        fill="white"
      />
    </svg>
  );
};

export default CheckboxSVG;
