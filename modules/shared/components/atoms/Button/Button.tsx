import React from 'react';
import classnames from 'classnames';
import type { FC, ReactElement } from 'react';
import type { IButton } from './types/IButton';
import styles from './Button.module.css';
import ButtonArrowDown from '../../icons/buttonArowDown.svg';

const Button: FC<IButton.IProps> = ({
  children = 'Button',
  disabled = false,
  variant = 'primary',
  size = 'medium',
  leftIcon = false,
  rightIcon = false,
  onlyIcon = false,
  onClick,
  ...props
}): ReactElement => {
  const btnClasses = classnames(
    styles.btn,
    {
      [styles['btn-primary']]: variant === 'primary',
      [styles['btn-secondary']]: variant === 'secondary',
      [styles['btn-text']]: variant === 'text',
    },
    {
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
      type="button"
      onClick={onClick}
      className={btnClasses}
      disabled={disabled}
      {...(props as unknown)}
    >
      {leftIcon && (
        <span>
          <ButtonArrowDown />
        </span>
      )}

      {onlyIcon ? (
        <span>
          <ButtonArrowDown />
        </span>
      ) : (
        children
      )}
      {rightIcon && (
        <span>
          <ButtonArrowDown />
        </span>
      )}
    </button>
  );
};

export default Button;
