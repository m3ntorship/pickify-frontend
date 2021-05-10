import type { FC, ReactElement } from 'react';
import React from 'react';
// import styles from './Button.module.css';
import classnames from 'classnames';
import type { IButton } from './IButton';

const Button: FC<IButton.IProps> = ({
  children = 'Button',
  disabled = false,
  variant = 'primary',
  size = 'md',
  leftIcon = false,
  rightIcon = false,
  onlyIcon = false,
  mockFunction,
}): ReactElement => {
  let padding = '';
  let iconSize = '';
  if (onlyIcon) {
    if (size === 'md') {
      padding = 'p-xs text-base font-medium';
    } else if (size === 'sm') {
      padding = 'p-xs text-sm font-medium';
    } else {
      padding = 'p-s text-md font-bold';
    }
  } else if (size === 'md') {
    padding = 'py-xs px-l text-base font-medium';
  } else if (size === 'sm') {
    padding = 'py-s px-m text-sm font-medium';
  } else {
    padding = 'py-m px-xl text-md font-bold';
  }
  if (onlyIcon) {
    if (size === 'md') {
      iconSize = '24';
    } else if (size === 'sm') {
      iconSize = '16';
    } else {
      iconSize = '32';
    }
  } else if (size === 'md' || size === 'sm') {
    iconSize = '16';
  } else {
    iconSize = '24';
  }
  const buttonClassNames = classnames({
    'text-primary bg-white hover:bg-grey-bg  border border-primary focus:outline-none focus:ring-1 focus:ring-primary-dark focus:border-primary-dark ':
      variant === 'secondary',
    'bg-none text-accent hover:text-accent-hover focus:underline':
      variant === 'text',
    'bg-primary hover:bg-primary-hover text-white focus:outline-none focus:ring-1 focus:ring-primary-dark':
      variant === 'primary',
  });
  const svgClassNames = classnames({
    '#7048E8': variant === 'secondary',
    '#00A8E8': variant === 'text',
    white: variant === 'primary',
  });
  return (
    <button
      type="button"
      onClick={mockFunction}
      className={`rounded-full focus:outline-none ml-4 mt-4 focus:border-2 focus:border-dark-btnFocus

       ${buttonClassNames}
       ${padding}
       ${disabled ? 'opacity-25 pointer-events-none' : ''}`}
      disabled={disabled}
    >
      {rightIcon ? (
        <svg
          className={`${onlyIcon ? '' : 'mr-xxs'} inline-block`}
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.293 9.293L12 13.586L7.70697 9.293L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.293Z"
            fill={svgClassNames}
          />
        </svg>
      ) : null}
      {onlyIcon ? null : children}
      {leftIcon ? (
        <svg
          className={`${onlyIcon ? '' : 'ml-xxs'} inline-block`}
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.293 9.293L12 13.586L7.70697 9.293L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.293Z"
            fill={svgClassNames}
          />
        </svg>
      ) : null}
    </button>
  );
};

export default Button;
