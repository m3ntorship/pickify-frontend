import type { FC, ReactElement } from 'react';
import React from 'react';
import classnames from 'classnames';
import type { IButton } from './IButton';
import styles from './Button.module.css';
import ButtonArrowDown from '../../icons/buttonArowDown.svg';

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
  const buttonPaddingClassNames = classnames('font-meduim', {
    [styles['btn-padding-onlyIcon-large']]: onlyIcon && size === 'lg',
    [styles['btn-padding-onlyIcon-meduim']]: onlyIcon && size === 'md',
    [styles['btn-padding-onlyIcon-small']]: onlyIcon && size === 'sm',
    [styles['btn-padding-large']]: !onlyIcon && size === 'lg',
    [styles['btn-padding-meduim']]: !onlyIcon && size === 'md',
    [styles['btn-padding-small']]: !onlyIcon && size === 'sm',
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
    [styles['btn-secondary']]: variant === 'secondary',
    [styles['btn-text']]: variant === 'text',
    [styles['btn-primary']]: variant === 'primary',
  });
  const svgColorClassNames = classnames({
    [styles['svgColor-primary']]: variant === 'secondary',
    [styles['svgColor-accent']]: variant === 'text',
    [styles['svgColor-white']]: variant === 'primary',
  });
  const svgMargingClassName = classnames({
    // [styles['svgMarging-onlyIcon']]: onlyIcon,
    [styles['svgMarging-rightIcon']]: rightIcon,
    [styles['svgMarging-leftIcon']]: leftIcon,
  });

  const defaultClassNames = classnames({
    [styles['btn-default']]: true,
  });
  const disabledButtonClassNames = classnames({
    [styles['btn-disable']]: disabled,
  });
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
       ${defaultClassNames}
       ${buttonVariantClassNames}
       ${buttonPaddingClassNames}
       ${disabledButtonClassNames}`}
      disabled={disabled}
    >
      {leftIcon && (
        <ButtonArrowDown
          className={`inline-block
          ${svgMargingClassName}
          ${svgColorClassNames}
           `}
          width={iconSizeClassNames}
          height={iconSizeClassNames}
        />
      )}

      {onlyIcon ? (
        <ButtonArrowDown
          className={`inline-block
            ${svgMargingClassName}
            ${svgColorClassNames}
             `}
          width={iconSizeClassNames}
          height={iconSizeClassNames}
        />
      ) : (
        children
      )}
      {rightIcon && (
        <ButtonArrowDown
          className={`inline-block
           ${svgMargingClassName}
           ${svgColorClassNames}
            `}
          width={iconSizeClassNames}
          height={iconSizeClassNames}
        />
      )}
    </button>
  );
};

export default Button;
