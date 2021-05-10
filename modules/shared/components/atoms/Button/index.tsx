import type { FC, ReactElement } from 'react';
import React from 'react';
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
  onClick,
}): ReactElement => {
  const buttonPaddingClassNames = classnames({
    'p-xs text-base font-medium': onlyIcon && size === 'md',
    'p-xs text-sm font-medium': onlyIcon && size === 'sm',
    'p-s text-md font-bold': onlyIcon && size === 'lg',
    'py-xs px-l text-base font-medium': !onlyIcon && size === 'md',
    'py-s px-m text-sm font-medium': !onlyIcon && size === 'sm',
    'py-m px-xl text-md font-bold': !onlyIcon && size === 'lg',
  });
  const iconSizeClassNames = classnames({
    '24': (size === 'md' && onlyIcon) || (size === 'lg' && !onlyIcon),
    '16':
      (size === 'sm' && onlyIcon) ||
      (size === 'md' && !onlyIcon) ||
      (size === 'sm' && !onlyIcon),
    '32': size === 'lg' && onlyIcon,
  });
  const buttonVariantClassNames = classnames({
    'text-primary bg-white hover:bg-grey-bg border border-primary focus:outline-none focus:ring-2 focus:ring-primary-dark ':
      variant === 'secondary',
    'bg-none text-accent hover:text-accent-hover focus:underline':
      variant === 'text',
    'bg-primary hover:bg-primary-hover text-white focus:outline-none focus:ring-2 focus:ring-primary-dark':
      variant === 'primary',
  });
  const svgColorClassNames = classnames({
    'text-primary': variant === 'secondary',
    'text-accent': variant === 'text',
    'text-white': variant === 'primary',
  });
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full focus:outline-none ml-4 mt-4 focus:border-2 focus:border-dark-btnFocus
       ${buttonVariantClassNames}
       ${buttonPaddingClassNames}
       ${disabled ? 'opacity-25 pointer-events-none' : ''}`}
      disabled={disabled}
    >
      {rightIcon ? (
        <svg
          className={`${
            onlyIcon ? '' : 'mr-xxs'
          } inline-block fill-current ${svgColorClassNames}`}
          width={iconSizeClassNames}
          height={iconSizeClassNames}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.293 9.293L12 13.586L7.70697 9.293L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.293Z" />
        </svg>
      ) : null}
      {/* {onlyIcon ? null : children} */}
      {onlyIcon ? (
        <svg
          className={`mx-xxs inline-block fill-current  ${svgColorClassNames} `}
          width={iconSizeClassNames}
          height={iconSizeClassNames}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.293 9.293L12 13.586L7.70697 9.293L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.293Z" />
        </svg>
      ) : (
        children
      )}
      {leftIcon ? (
        <svg
          className={`${
            onlyIcon ? '' : 'ml-xxs'
          } inline-block fill-current  ${svgColorClassNames}`}
          width={iconSizeClassNames}
          height={iconSizeClassNames}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.293 9.293L12 13.586L7.70697 9.293L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.293Z" />
        </svg>
      ) : null}
    </button>
  );
};

export default Button;
