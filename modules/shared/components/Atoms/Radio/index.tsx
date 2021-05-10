import type { ReactElement, FC } from 'react';
import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './Radio.module.css';
import type { IRadio } from './IRadio';

const Radio: FC<IRadio.IProps> = ({
  size = 'default',
  disabled = false,
}): ReactElement => {
  const [checked, setChecked] = useState(false);
  const radioClasses = classnames(styles.radio_background, {
    [styles.size_small]: size === 'small',
    [styles.size_default]: size === 'default',
    [styles.checked_small]: checked && size === 'small',
    [styles.checked_default]: checked && size === 'default',
    [styles.non_checked]: !checked,
    [styles.disabled]: disabled,
  });
  const radioInputClasses = classnames(styles.radio_transparency, {
    [styles.size_small]: size === 'small',
    [styles.size_default]: size === 'default',
  });

  return (
    <div className="relative">
      <input
        type="radio"
        className={radioInputClasses}
        data-testid="Radio"
        disabled={disabled}
        onClick={(): void => {
          setChecked(!checked);
        }}
      />
      <div className={radioClasses} />
    </div>
  );
};

export default Radio;
