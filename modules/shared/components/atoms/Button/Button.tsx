import React from 'react';
import classnames from 'classnames';
import type { FC, ReactElement } from 'react';
import type { IButton } from './types/IButton';
import styles from './Button.module.css';
// THE normal prop should only be passed with the tertiary variant
const Button: FC<IButton.IProps> = ({
  buttonText = 'Button',
  disabled = false,
  variant = 'primary',
  size = 'medium',
  leftIcon = false,
  rightIcon = false,
  onlyIcon = false,
  iconComponent,
  buttonType = 'button',
  onClick,
}): ReactElement => {
  const btnClasses = classnames(
    styles.btn,
    {
      [styles['btn-primary']]: variant === 'primary',
      [styles['btn-secondary']]: variant === 'secondary',
      [styles['btn-quaternary']]: variant === 'quaternary',
      [styles['btn-text']]: variant === 'text',
    },
    {
      [styles['btn-xlarge']]: size === 'xlarge',
      [styles['btn-large']]: size === 'large',
      [styles['btn-medium']]: size === 'medium',
      [styles['btn-normal']]: size === 'normal',
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
      {leftIcon && <span>{iconComponent} </span>}

      {onlyIcon ? <span>{iconComponent} </span> : buttonText}
      {rightIcon && <span>{iconComponent} </span>}
    </button>
  );
};

export default Button;
