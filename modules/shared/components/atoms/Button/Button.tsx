import React from 'react';
import classnames from 'classnames';
import type { FC, ReactElement } from 'react';
import type { IButton } from './types/IButton';
import styles from './Button.module.css';
import ArowDown from '../../icons/buttonArowDown.svg';

const Button: FC<IButton.IProps> = ({
  children = 'Button',
  disabled = false,
  variant = 'primary',
  size = 'medium',
  leftIcon = false,
  rightIcon = false,
  onlyIcon = false,
  buttonType,
  onClick,
}): ReactElement => {
  const btnClasses = classnames(
    styles.btn,
    {
      [styles['btn-primary']]: variant === 'primary',
      [styles['btn-secondary']]: variant === 'secondary',
      [styles['btn-tertiary']]: variant === 'tertiary',
      [styles['btn-text']]: variant === 'text',
    },
    {
      [styles['btn-xlarge']]: size === 'xlarge',
      [styles['btn-large']]: size === 'large',
      [styles['btn-medium']]: size === 'medium',
      [styles['btn-small']]: size === 'small',
    },
    {
      [styles['right-icon']]: rightIcon,
      [styles['left-icon']]: leftIcon,
    },
    { [styles['btn-rounded']]: onlyIcon },
  );

  return (
    <button
      /* eslint-disable react/button-has-type */
      type={buttonType}
      onClick={onClick}
      className={btnClasses}
      disabled={disabled}
    >
      {leftIcon && (
        <span>
          <ArowDown />
        </span>
      )}

      {onlyIcon ? (
        <span>
          <ArowDown />
        </span>
      ) : (
        children
      )}
      {rightIcon && (
        <span>
          <ArowDown />
        </span>
      )}
    </button>
  );
};

export default Button;
